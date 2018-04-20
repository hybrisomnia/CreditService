"use strict";

function transactionService() {
    var Transaction = require("../models/transaction");

    this.getTransactions = function (query) {
        return Transaction.find(query).exec();
    };

    this.getTransaction = function (id) {
        return Transaction.findOne({
            _id : id
        }).exec();

    };

    this.createTransaction = function (data) {

        let transaction = new Transaction(data);

        return transaction.save();

    };
}

module.exports = new transactionService();