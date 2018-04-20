/*jshint esversion: 6 */

"use strict";

const config = require("./config");
const restify = require("restify");
const mongoose = require("mongoose");
const restifyPlugins = require("restify-plugins");
const passport = require("passport");
const bodyParser = require("body-parser");
const JWTStrategy = require("@sap/xssec").JWTStrategy;

/**
 * Initialize Server
 */
const server = restify.createServer({
    name: config.name
});

passport.use(new JWTStrategy(config.uaa));

server.use(bodyParser.json());
server.use(passport.initialize());
server.use(passport.authenticate("JWT", {session: false}));
server.use(restifyPlugins.queryParser({mapParams: true}));

/**
 * Start Server, Connect to DB & Require Routes
 */
server.listen(config.port, () => {
    // establish connection to mongodb
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db.uri);

    const db = mongoose.connection;

    db.on("error", (err) => {
        console.error(err);
        process.exit(1);
    });

    db.once("open", () => {
        require("./routes")(server);
        console.log(`Server is listening on port ${config.port}`);
    });
});

