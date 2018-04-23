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
    server.post('/creditbundles', passport.authenticate('JWT', {session: false}), creditBundleController.createCreditBundle);

    /** LIST * */
    server.get('/creditbundles', passport.authenticate('JWT', {session: false}), creditBundleController.getCreditBundles);

    /** GET * */
    server.get('/creditbundles/:creditbundle_code', passport.authenticate('JWT', {session: false}), creditBundleController.getCreditBundle);

    /** GET * */
    server.get('/credits', passport.authenticate('JWT', {session: false}), creditController.getCredits);

    /** POST * */
    server.post('/credits/use', passport.authenticate('JWT', {session: false}), creditController.useCredits);

    /** LIST * */
    server.get('/transactions', passport.authenticate('JWT', {session: false}), transactionController.getTransactions);

    /** GET * */
    server.get('/transactions/:transaction_id', passport.authenticate('JWT', {session: false}), transactionController.getTransaction);

    /** POST **/
    server.post("/transactions/:transaction_id/refund", passport.authenticate('JWT', {session: false}), transactionController.refundTransaction);

    server.del("/creditbundles", passport.authenticate('JWT', {session: false}), creditBundleController.deleteCreditBundles);
    server.del("/transactions", passport.authenticate('JWT', {session: false}), transactionController.deleteTransactions);

    server.get(/\/console\/?.*/, restify.plugins.serveStatic({
        directory: './public',
        appendRequestPath: false
    }));

};
