/**
 * 
 */

'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost', 
    port: 3000
});

// Connect to db
server.app.db = mongojs('creditsdb');

// Load plugins and start server
server.register([
	{
		register: require('./routes/credits')
	},
	{
		register: require('./routes/creditbundles')
	}
], (err) => {

    if (err) {
        throw err;
    }

    // Start the server
    server.start((err) => {
        console.log('Server running at:', server.info.uri);
    });

});
