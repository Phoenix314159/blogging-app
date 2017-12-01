const cookieSession = require('cookie-session'),
  {cookieAge, cookieKey} = require('../config/config'),
    bodyParser = require('body-parser'),
    passport = require('passport');

module.exports = app => {
    app.use(
        cookieSession({
            maxAge: cookieAge,
            keys: [cookieKey]
        })
    );

    app.use(bodyParser.json());

    app.use(passport.initialize());

    app.use(passport.session());
};
