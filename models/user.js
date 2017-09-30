const mongoose = require('mongoose'),
    { Schema } = mongoose,
    userSchema = new Schema({
        username: String,
        password: String,
        name: String,
        emailAddress: String
    });

mongoose.model('users', userSchema);
