/*jshint esversion: 6 */

"use strict";

const errors = require('restify-errors');
const base_url  = process.env.BASE_URL || 'http://localhost:3000';

function creditBundleController() {
    var CreditBundleService = require('../services/creditbundle-service');
    var TransactionService = require("../services/transaction-service");

    this.deleteCreditBundles = function (req, res, next) {
        CreditBundleService.deleteCreditBundles().then(function (r) {
            res.send(200, r);
        }).catch(function (err) {
            res.send(400, err);
        });
    };

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
                res.send(201, base_url + "/creditbundles/" + doc.code);
                next();
            }).catch(function (err) {
                res.send(400,err);
        });
    };

    this.getCreditBundles = function (req, res, next) {

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
            return next(new errors.InvalidContentError(err.errors.name.message));
        });
    };

    this.getCreditBundle = function (req, res, next) {
        var code = req.params.creditbundle_code;

        CreditBundleService.getCreditBundle(code).then(function (doc) {
            if(!doc){
                res.send(404,"Resource " + code + " not found.");
            }
            res.send(200,doc);
            next();
        }).catch(function (err) {
            return next(new errors.InvalidContentError(err.errors.name.message));
        });

    };
}

module.exports = new creditBundleController();