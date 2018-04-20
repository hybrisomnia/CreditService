/*jshint esversion: 6 */

"use strict";

const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const CreditBundleSchema = new mongoose.Schema({
    code : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    assigned_to : {
        type : [ String ],
        required : true
    },
    expire_date : {
        type : Date,
        required : true
    }
}, {
    minimize : false
});

CreditBundleSchema.plugin(timestamps);
CreditBundleSchema.plugin(mongooseStringQuery);

const CreditBundle = mongoose.model('CreditBundle', CreditBundleSchema);
module.exports = CreditBundle;