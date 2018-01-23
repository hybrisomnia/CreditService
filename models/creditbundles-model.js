/**
 * http://usejsdoc.org/
 */

'use strict';

function CreditBundlesModel(db) {
    this.db = db;
};

CreditBundlesModel.prototype.getCreditBundles = function (callback) {

    var thedoc = {};

    this.db.creditbundles.find()(function (err, docs) {

        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        callback(err, docs);

    });

};

// CreditsModel.prototype.updateQuantity = function (id, newquantity, callback)
// {
// console.log(id);
// console.log(newquantity);
//
// this.db.creditbundles.findAndModify({
// query : {
// _id : id
// },
// update : {
// $set : {
// quantity : newquantity
// }
// }
//
// }, function (err, doc, lastErrorObject) {
// console.log(err);
// console.log(doc);
// console.log(lastErrorObject);
//
// if (err) {
// return reply(Boom.wrap(err, 'Internal MongoDB error'));
// }
// callback(err, doc);
//
// });
// };

module.exports = CreditBundlesModel;