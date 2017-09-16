module.exports = (app, express, config) => {

    app.use(express.static(config.proc + '/client/build'));

    app.get('*', (req, res) => {
        res.sendFile(config.proc + '/client/build/index.html');
    })
}




