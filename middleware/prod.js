module.exports = (app, express, config) => {

    app.use(express.static(config.dirname + '/client/build'));

    app.get('*', (req, res) => {
        res.sendFile(config.dirname + '/client/build/index.html');
    })
}




