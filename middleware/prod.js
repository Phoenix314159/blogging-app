module.exports = (app, express, config) => {
const {dirname} = config
    app.use(express.static(dirname + '/client/build'));

    app.get('*', (req, res) => {
        res.sendFile(dirname + '/client/build/index.html');
    })
};




