const passport = require('../services/passport'),
    isAuthed = require('../services/auth'),
    bcrypt = require('bcryptjs'),
    hashPass = password => {
        let salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    };


module.exports = app => {

    app.post('/api/login', passport.authenticate('local', {
        successRedirect: '/api/me',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/api/me', isAuthed.auth, (req, res) => {
        return res.status(200).send(req.user);
    });

    app.get('/api/newuser', (req, res) => {
        req.body.password = hashPass(req.body.password);
        req.body.emailAdrress = req.body.emailAdrress.toLowerCase();
        let user = new User({
            name: req.body.name,
            emailAddress: req.body.emailAdrress,
            username: req.body.username,
            password: req.body.password
        }).save();
    });



}
