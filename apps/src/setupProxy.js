const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/api/numeral', {
        target: 'http://backend:8080',
    }));
};
