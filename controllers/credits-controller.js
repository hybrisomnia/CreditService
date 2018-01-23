'use strict';

var Boom = require('boom');
var CreditsModel = require('../models/credits-model');

function CreditsController(db) {
    this.creditsModel = new CreditsModel(db);
}

CreditsController.prototype.index = function (request, reply) {

    var thedoc = {};

    var self = this;
    thedoc = this.creditsModel.getCreditBundle(function (err, data) {

        var newquantity = data.quantity - request.payload.quantity;

        self.creditsModel.updateQuantity(data._id, newquantity, function (err,
                data) {
            reply(data);
        })
    });

}

module.exports = CreditsController;