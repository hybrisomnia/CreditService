/**
 * http://usejsdoc.org/
 */
module.exports = {
  //
  // Server
  //
  server: {
    port: 3000,
    router: {
      stripTrailingSlash: true
    },
    routes: {
      cors: true
    }
  },

  //
  // API URL
  //
  apiUrl: 'http://localhost:3000',

  //
  // Node runtime settings
  //
  node: {
    debugPort: 5858
  },

  //
  // Database
  //
  database: {
    connection: {
      database: 'my-database-name'    // @changeme
    }
  },

  //
  // Logging
  //
  logging: {
    console: {
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: true
    }
  }
}