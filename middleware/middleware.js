const cookieSession = require('cookie-session'),
    config = require('../config/config'),
    bodyParser = require('body-parser'),
    passport = require('passport');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: config.cookieAge,
            keys: [config.cookieKey]
        })
    );

    app.use(bodyParser.json());

    app.use(passport.initialize());

    app.use(passport.session());
};
