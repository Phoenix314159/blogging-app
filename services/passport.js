const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcryptjs'),
    mongoose = require('mongoose'),
    User = mongoose.model('users');


const verifyPassword = (submittedPassword, userPassword) => {
    return bcrypt.compareSync(submittedPassword, userPassword);
}

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password,  done) => {
    username = username.toLowerCase();
    let existingUser = await User.findOne({ username }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
    })
    if (existingUser && verifyPassword(password)) {
        return done(null, existingUser);
    }
    done(null, user)

}));


module.exports = passport;