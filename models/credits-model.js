/**
 * http://usejsdoc.org/
 */

'use stricts';

function CreditsModel(db) {
    this.db = db;
};

CreditsModel.prototype.getCreditBundle = function (callback) {
    console.log("made it to model");

    var thedoc = {};

    this.db.creditbundles.find().forEach(function (err, doc) {
        console.log("looping");
        if (!doc) {
            console.log("not doc");
            return;
        } else {
            thedoc = doc;
            console.log("doc found");
            console.log(doc);
            console.log(thedoc);
        }
        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        callback(err, doc);

        
        
        
        
    });

};

CreditsModel.prototype.updateQuantity = function (id, newquantity, callback) {
    console.log(id);
    console.log(newquantity);

    this.db.creditbundles.findAndModify({
        query : {
            _id : id
        },
        update : {
            $set : {
                quantity : newquantity
            }
        }

    }, function (err, doc, lastErrorObject) {
        console.log(err);
        console.log(doc);
        console.log(lastErrorObject);

        if (err) {
            return reply(Boom.wrap(err, 'Internal MongoDB error'));
        }
        callback(err, doc);

    });
};

module.exports = CreditsModel;