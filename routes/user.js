const passport = require('passport'),
    bcrypt = require('bcryptjs'),
    mongoose = require('mongoose'),
    User = mongoose.model('users'),
    hashPass = password => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    };

module.exports = app => {

    app.post('/api/login', passport.authenticate('local', {
        successRedirect: '/api/user',
        failureRedirect: '/api/error',
        failureFlash: true
    }));

    app.get('/api/user', (req, res) => {
        return res.status(200).send(req.user);
    });

    app.get('/api/error', (req, res) => {
        return res.status(500).send("an error occurred")
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        return res.send('logged out');
    });

    app.post('/api/adduser', (req, res) => {
        try {
            new User({
                name: req.body.name,
                emailAddress: req.body.emailAddress.toLowerCase(),
                username: req.body.username,
                password: hashPass(req.body.password)
            }).save();
            res.status(200).send(req.user);
        }
        catch(err) {
            console.log(err);
            res.status(500).send('an error occurred');
        }
    });
};
