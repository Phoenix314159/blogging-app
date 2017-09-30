module.exports = app => {
    app.post('/api/login', (req, res) => {
        console.log(req.body);
        res.status(200).send('yo man');
    })
}
