/**
 * http://usejsdoc.org/
 */

"use strict";

const errors = require('restify-errors');

function creditBundleController() {
    var CreditBundleService = require('../services/creditbundle-service');
    var TransactionService = require("../services/transaction-service");

    this.createCreditBundle = function (req, res, next) {
        if (!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        let data = req.body || {};

        CreditBundleService.createCreditBundle(data)
            .then(function (doc) {
                var t = {};
                t.type = "NEW";
                t.quantity = doc.quantity;
                t.bundle_code = doc.code;

                TransactionService.createTransaction(t);
                res.send(201, doc.code);
                next();
            }).catch(function (err) {
                console.error(err);
                res.send(err);
                return next(new errors.InternalError(err.message));
        });


    };

    this.getCreditBundles = function (req, res, next) {

        console.log(req);
        var query = {};
        var inc_empty = false;
        var inc_expired = false;
        if (req.query.user) {
            query.assigned_to = req.query.user;
        }

        if (req.query.include_empty === "true"){
            inc_empty = true;
        }

        if (req.query.include_expired === "true"){
            inc_expired = true;
        }

        CreditBundleService.getCreditBundles(query, inc_empty, inc_expired).then(function (docs) {
            res.send(docs);
            next();
        }).catch(function (err) {
            console.error(err);
            return next(new errors.InvalidContentError(err.errors.name.message));
        });
    };

    this.getCreditBundle = function (req, res, next) {
        var code = req.params.creditbundle_code;

        CreditBundleService.getCreditBundle(code).then(function (doc) {
            res.send(doc);
            next();
        }).catch(function (err) {
            console.error(err);
            return next(new errors.InvalidContentError(err.errors.name.message));
        });

    };
}

module.exports = new creditBundleController();