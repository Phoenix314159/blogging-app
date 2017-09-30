const mongoose = require('mongoose'),
    { Schema } = mongoose,
    userSchema = new Schema({
        name: String,
        emailAddress: String,
        username: String,
        password: String
    });

mongoose.model('users', userSchema);
