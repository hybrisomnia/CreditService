/*jshint esversion: 6 */

"use strict";

const voucherCodes = require('voucher-code-generator');

function creditBundleService() {
    var CreditBundle = require('../models/creditbundle');

    this.deleteCreditBundles = function () {
        return CreditBundle.remove();
    };

    this.getCreditBundles = function (query,empty,expired) {
        var dt, q;

        dt = expired ? new Date(1700, 1, 1) : new Date();
        q = empty ? -999 : 0;

        console.log("q : " + q + " " + empty);
        return CreditBundle.find(query)
            .where('expire_date').gt(dt)
            .where('quantity').gt(q)
            .sort('expire_date')
            .exec();
    };

    this.getCreditBundle = function (code) {
        return CreditBundle.findOne({
            code: code
        }).exec();

    };

    this.createCreditBundle = function (data) {
        console.log("credit bundle svc 1");

        let creditBundle = new CreditBundle(data);

        creditBundle.code = voucherCodes.generate({
            pattern: "####-####-####",
            charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        console.log("credit bundle svc 1");
        return creditBundle.save();

    };

    this.updateBundleQuantity = function (id, quantity) {
        return CreditBundle.update({
            _id: id
        }, {
            quantity: quantity
        });
    };

    this.increaseBundleQuantity = function (code, quantity) {
        return CreditBundle.update({
            code: code
        }, {
            $inc : {quantity: quantity}
        });
    };
}

module.exports = new creditBundleService();