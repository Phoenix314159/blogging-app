const express = require('express'),
    config = require('./config/config'),
    app = express();
require('./middleware/middleware')(app);
if(process.env.NODE_ENV === 'production') {
    require('./middleware/prod')(app, express, config);
}
require('./routes/sampleRoute')(app);
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
})
