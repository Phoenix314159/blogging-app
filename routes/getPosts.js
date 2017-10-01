const config = require('../config/config'),
    axios = require('axios'),
    requireLogin = require('../middleware/requireLogin'),
    isAuthed = require('../services/auth');

module.exports = app => {
    app.get('/api/getposts', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.get(`${config.url}?${config.api_key}`);
        res.status(200).send(response.data);
    })
}