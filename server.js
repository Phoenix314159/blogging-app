const express = require('express'),
    config = require('./config/config'),
    app = express(),
    mongoose = require('mongoose');

require('./models/user');
require('./middleware/middleware')(app);

mongoose.connect(config.mongoURI);

if(process.env.NODE_ENV === 'production') {
    require('./middleware/prod')(app, express, config);
}

require('./routes/getPosts')(app);
require('./routes/addPosts')(app);
require('./routes/getPost')(app);
require('./routes/deletePost')(app);
require('./routes/user')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
