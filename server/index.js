// console.log("server ")
const config = require('./config/config');

// console.log(process.env.NODE_ENV)

const app = require('./config/express');
require('./config/mongoose');
var fs = require('fs')
var https = require('https')

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
    https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
      }, app)
      .listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
  });
}

module.exports = app;