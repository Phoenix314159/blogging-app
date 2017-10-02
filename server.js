const express = require('express'),
    config = require('./config/config'),
    app = module.exports = express(),
    mongoose = require('mongoose');

mongoose.connect(config.mongoURI);

require('./models/user');
require('./services/passport');
require('./middleware/middleware')(app);

if(process.env.NODE_ENV === 'production') {
    require('./middleware/prod')(app, express, config);
}
require('./routes/user')(app);
require('./routes/posts')(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
