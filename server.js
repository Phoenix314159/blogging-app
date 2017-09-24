const express = require('express'),
    config = require('./config/config'),
    app = express();
require('./middleware/middleware')(app);
if(process.env.NODE_ENV === 'production') {
    require('./middleware/prod')(app, express, config);
}
require('./routes/getPosts')(app);
require('./routes/addPosts')(app);
require('./routes/getPost')(app);
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
