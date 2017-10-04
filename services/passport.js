const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs'),
    mongoose = require('mongoose'),
    User = mongoose.model('users');

const verifyPassword = (submittedPassword, userPassword) => {
    let result =  bcrypt.compareSync(submittedPassword, userPassword);
    return result;
};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err,user) => {
        done(null, user);
    });
});

passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback : true
}, (req, username, password, done) => {
    username = username.toLowerCase();
    let existingUser = User.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (user) return done(null, user);
        if (!user) return done(null, false);
    });

    if (existingUser && verifyPassword(req.body.password, password)) {
        return done(null, existingUser);
    }
}));



