const config = require('../config/config'),
    axios = require('axios'),
    requireLogin = require('../middleware/requireLogin'),
    isAuthed = require('../services/auth');

module.exports = app => {
    app.delete('/api/deletepost', requireLogin, isAuthed.auth, async (req, res) => {
        let response = await axios.delete(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    })
}
