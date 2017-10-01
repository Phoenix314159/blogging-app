const config = require('../config/config'),
    axios = require('axios'),
    requireLogin = require('../middleware/requireLogin'),
    isAuthed = require('../services/auth');

module.exports = app => {

    app.get('/api/getposts', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.get(`${config.url}?${config.api_key}`);
        res.status(200).send(response.data);
    });

    app.get('/api/getpost', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.get(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    });

    app.post('/api/addpost', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.post(`${config.url}?${config.api_key}`, req.body);
        res.status(200).send(response.data);
    });

    app.delete('/api/deletepost', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.delete(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    });
};
