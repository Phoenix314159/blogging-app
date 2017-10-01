const passport = require('passport'),
    bcrypt = require('bcryptjs'),
    mongoose = require('mongoose'),
    User = mongoose.model('users'),
    hashPass = password => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    };

module.exports = app => {

    app.use(passport.initialize());

    app.use(passport.session());

    app.post('/api/login', passport.authenticate('local', {
        successRedirect: '/api/me',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send('hi');
    });

    app.get('/api/me', (req, res) => {
        return res.status(200).send(req.user);
    });

    app.post('/api/adduser', (req, res) => {
        new User({
            name: req.body.name,
            emailAddress: req.body.emailAddress.toLowerCase(),
            username: req.body.username,
            password: hashPass(req.body.password)
        }).save();
        res.status(200).send(req.user);
    });
}
