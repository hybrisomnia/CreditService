'use strict';

const Boom = require('boom');	
const uuid = require('node-uuid');
const Joi = require('joi');

var CreditBundlesController = require('../controllers/creditbundles-controller');

exports.register = function (server, options, next) {

    const db = server.app.db;
    
    var creditBundlesController = new CreditBundlesController(db);

    server.route({
        method: 'GET',
        path: '/creditbundles',
        handler: creditBundlesController.index
    });

    server.route({
        method: 'GET',
        path: '/creditbundles/{id}',
        handler: function (request, reply) {

            db.creditbundles.findOne({
                _id: request.params.id
            }, (err, doc) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (!doc) {
                    return reply(Boom.notFound());
                }

                reply(doc);
            });

        }
    });

    server.route({
        method: 'POST',
        path: '/creditbundles',
        handler: function (request, reply) {

            const creditbundle = request.payload;

            // Create an id
            creditbundle._id = uuid.v1();
            creditbundle.createddate = new Date();

            db.creditbundles.save(creditbundle, (err, result) => {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                reply(creditbundle);
            });
        },
        config: {
            validate: {
                payload: {
                    expiredate: Joi.date().min('now'),
                    quantity: Joi.number().required(),
                    assignedto: Joi.array().items(Joi.string()),
                    createdby: Joi.string()
                }
            }
        }
    });

    server.route({
        method: 'PATCH',
        path: '/creditbundles/{id}',
        handler: function (request, reply) {

            db.creditbundles.update({
                _id: request.params.id
            }, {
                $set: request.payload
            }, function (err, result) {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (result.n === 0) {
                    return reply(Boom.notFound());
                }

                reply().code(204);
            });
        },
        config: {
            validate: {
                payload: Joi.object({
                    title: Joi.string().min(10).max(50).optional(),
                    author: Joi.string().min(10).max(50).optional(),
                    isbn: Joi.number().optional()
                }).required().min(1)
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/creditbundles/{id}',
        handler: function (request, reply) {

            db.creditbundles.remove({
                _id: request.params.id
            }, function (err, result) {

                if (err) {
                    return reply(Boom.wrap(err, 'Internal MongoDB error'));
                }

                if (result.n === 0) {
                    return reply(Boom.notFound());
                }

                reply().code(204);
            });
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'routes-creditbundles'
};
