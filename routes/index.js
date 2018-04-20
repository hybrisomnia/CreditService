/**
 * Model Schema
 */

"use strict";

var fs = require("fs");
var restify = require("restify");

const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const xsenv = require('@sap/xsenv');
const JWTStrategy = require('@sap/xssec').JWTStrategy;


module.exports = function (server) {
    var creditBundleController = require('../controllers/creditbundle-controller');
    var creditController = require('../controllers/credit-controller');
    var transactionController = require("../controllers/transaction-controller");

    /** POST * */
    server.post('/creditbundles', creditBundleController.createCreditBundle);

    /** LIST * */
    server.get('/creditbundles', creditBundleController.getCreditBundles);

    /** GET * */
    server.get('/creditbundles/:creditbundle_code', creditBundleController.getCreditBundle);

    /** POST * */
    server.post('/credits/use', creditController.useCredits);

    /** LIST * */
    server.get('/transactions', transactionController.getTransactions);

    /** GET * */
    server.get('/transactions/:transaction_id', transactionController.getTransaction);

    /** POST **/
    server.post("/transactions/:transaction_id/refund", transactionController.refundTransaction);


    server.get(/\/console\/?.*/, restify.plugins.serveStatic({
        directory: './public',
        appendRequestPath: false
    }));

    server.get(/\/bower_components\/?.*/, restify.plugins.serveStatic({
        directory: '/Users/i848067/Documents/CreditSvc'

    }));

    server.get(/\/bower_components\/api-console\//, restify.plugins.serveStatic({
        directory: './bower_components/api-console',
        appendRequestPath: false
    }));

    server.get(/\/bower_components\/raml-request-panel\//, restify.plugins.serveStatic({
        directory: './bower_components/raml-request-panel',
        appendRequestPath: false
    }));

    server.get(/\/bower_components\/paper-dialog-scrollable\//, restify.plugins.serveStatic({
        directory: './bower_components/paper-dialog-scrollable',
        appendRequestPath: false
    }));

    server.get(/\/bower_components\/paper-dialog\//, restify.plugins.serveStatic({
        directory: './bower_components/paper-dialog',
        appendRequestPath: false
    }));

    server.get(/\/bower_components\/raml-request-parameters-editor\//, restify.plugins.serveStatic({
        directory: './bower_components/raml-request-parameters-editor',
        appendRequestPath: false
    }));








    /*   server.get('/console', function indexHTML(req, res, next) {
           fs.readFile('./public/console.html', function (err, data) {
               if (err) {
                   next(err);
                   return;
               }

               res.setHeader('Content-Type', 'text/html');
               res.writeHead(200);
               res.end(data);
               next();
           });
       });*/


};