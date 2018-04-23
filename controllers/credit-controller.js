/*jshint esversion: 6 */

"use strict";

const errors = require("restify-errors");

function creditController() {
    var CreditBundleService = require("../services/creditbundle-service");
    var TransactionService = require("../services/transaction-service");

    this.getCredits = function (req, res, next) {
        var query = {};
        if (req.query.user) {
            query.assigned_to = req.query.user;
        }

        CreditBundleService.getCreditBundles(query).then(function (docs) {

            var credits = 0;
            docs.forEach(function (doc) {
                console.log(doc);
                credits += doc.quantity;
            });

            res.send(200, credits + " credits available");
        }).catch(function (err) {
            if (err) {
                console.error(err);
                return next(new errors.InvalidContentError(err.errors.name.message));
            }
        });

    };

    this.useCredits = function (req, res, next) {

        if (!req.is("application/json")) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        var query = {};
        if (req.query.user) {
            query.assigned_to = req.query.user;
        }
        if (req.body.bundle){
            query.code = req.body.bundle;
        }


        CreditBundleService.getCreditBundles(query).then(function (docs) {
            var available_credits = 0;
            var requested_credits = req.body.quantity;

            var bundles = [];
            var remaining = requested_credits;

            docs.forEach(function (doc) {
                if (doc.quantity && remaining > 0) {
                    var newquantity;
                    available_credits = available_credits + doc.quantity;

                    var bundle = {};
                    bundle._id = doc._id;
                    if (remaining > doc.quantity) {
                        newquantity = 0;
                        remaining = remaining - doc.quantity;
                        bundle.use = doc.quantity;

                    } else {
                        newquantity = doc.quantity - remaining;
                        bundle.use = remaining;
                        remaining = 0;

                    }
                    bundle.quantity = newquantity;
                    bundle.code = doc.code;
                    bundles.push(bundle);

                }
            });

            if (remaining > 0) {
                return res.send(400, "Insufficient balance.");
            }

            var count = 0;
            var used_bundles = [];
            bundles.forEach(function (bundle) {

                CreditBundleService.updateBundleQuantity(bundle._id, bundle.quantity)
                    .then(function (docs) {

                        var b = { code: bundle.code, used: bundle.use };
                        used_bundles.push(b);
                        count++;
                        if (count === bundles.length) {
                            var t = {};
                            t.type = "DEDUCT";
                            if (req.body.order_number){
                                console.log(req.body.order_number);
                                t.order_number = req.body.order_number;
                            }

                            t.quantity = requested_credits;

                            t.bundles = used_bundles;
                            if (query.assigned_to) {
                                t.user = query.assigned_to;
                            }
                            TransactionService.createTransaction(t);

                            res.send(200, bundles);
                        }
                    })
                    .catch(function (err) {
                        console.error(err);
                        return next(new errors.InvalidContentError(err.errors.name.message));
                    });


            });
        }).catch(function (err) {
            if (err) {
                console.error(err);
                return next(new errors.InvalidContentError(err.errors.name.message));
            }
        });

    };
}

module.exports = new creditController();
