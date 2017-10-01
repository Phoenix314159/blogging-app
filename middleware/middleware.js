const bodyParser = require('body-parser'),
    config = require('../config/config'),
    cookieSession = require('cookie-session');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: config.cookieAge,
            keys: [config.cookieKey]
        })
    );

    app.use(bodyParser.json());
}
