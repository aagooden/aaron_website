const proxy = require('http-proxy-middleware');

// Using this package to allow routes in Express server (port 5000) to be accessed by React client on port 3000

module.exports = function (app) {
    app.use(proxy('/home', { target: 'http://localhost:5000' }));
};