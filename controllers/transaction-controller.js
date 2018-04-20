/**
 * http://usejsdoc.org/
 */

"use strict";

const errors = require('restify-errors');

function transactionController()
{
    var TransactionService = require('../services/transaction-service');
    var CreditBundleService = require("../services/creditbundle-service");

    this.createTransaction = function (req, res, next)
    {
        if (!req.is('application/json'))
        {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        let data = req.body || {};

        TransactionService.createTransaction(data)
            .then(function (doc){
                res.send(201,doc._id);
                next();
            }).catch(function (err) {
            console.error(err);
            return next(new errors.InternalError(err.message));
        });


    };

    this.getTransactions = function (req, res, next)
    {
        var query = {};
        if (req.query.user)
        {
            query.assigned_to = req.query.user;
        }

        TransactionService.getTransactions(query).then(function (docs)
        {
            res.send(docs);
            next();
        }).catch(function (err)
        {
            console.error(err);
            return next(new errors.InvalidContentError(err.errors.name.message));
        });
    };

    this.getTransaction = function (req, res, next)
    {
        var id = req.params.transaction_id;

        TransactionService.getTransaction(id).then(function (doc)
        {
            res.send(doc);
            next();
        }).catch(function (err)
        {
            console.error(err);
            return next(new errors.InvalidContentError(err.errors.name.message));
        });

    };

    this.refundTransaction = function (req, res, next)
    {

        // Check if already refunded AND CAN be refunded.
        var id = req.params.transaction_id;

        TransactionService.getTransaction(id).then(function (doc)
        {
           //var bundles = doc.bundles;
            console.log("doc : ");
            console.log(doc);
            if(doc.type != "DEDUCT"){
                return res.send(400,"Transaction type " + doc.type + " can not be refunded.");
            }
            //check if refund already
            var count = 0;
            doc.bundles.forEach(function (b) {
                CreditBundleService.increaseBundleQuantity(b.code, b.used).then(function(d) {
                    count ++;
                    if(count == doc.bundles.length){


                        // create refund trasaction
                        var t = {};
                        t.type = "REFUND";
                        t.quantity = doc.quantity;
                        debugger;

                        t.bundles = doc.bundles;
                        t.original_transaction = doc._id;
                        TransactionService.createTransaction(t);

                        res.send(d);
                    }

                });
            });

            /// / res.send(doc);
           // next();
        }).catch(function (err)
        {
            console.error(err);
            return next(new errors.InvalidContentError(err.errors.name.message));
        });

    };

}

module.exports = new transactionController();