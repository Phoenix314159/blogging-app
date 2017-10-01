const express = require('express'),
    config = require('./config/config'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect(config.mongoURI);
require('./models/user');
require('./services/passport');
require('./middleware/middleware')(app);

if(process.env.NODE_ENV === 'production') {
    require('./middleware/prod')(app, express, config);
}
require('./routes/user')(app);
require('./routes/getPosts')(app);
require('./routes/addPost')(app);
require('./routes/getPost')(app);
require('./routes/deletePost')(app);


app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
