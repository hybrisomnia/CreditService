'use strict';

var Boom = require('boom');
var CreditBundlesModel = require('../models/creditbundles-model');

function CreditBundlesController(db) {
    this.creditBundlesModel = new CreditBundlesModel(db);
}

CreditBundlesController.prototype.index = function (request, reply) {

    reply(this.creditBundlesModel.getCreditBundles());
}

module.exports = CreditBundlesController;