"use strict";

const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const TransactionSchema = new mongoose.Schema({
    type : {
        type : String,
        enum : ['NEW','DEDUCT','REFUND'],
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    user : {
        type : String
    },
    bundle_code : {
        type : String
    },
    bundles : {
        type : Object
    },
    original_transaction : {
        type : String
    }

}, {
    minimize : false
});

TransactionSchema.plugin(timestamps);

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;