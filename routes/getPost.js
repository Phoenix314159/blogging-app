const config = require('../config/config'),
    axios = require('axios'),
    requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.get('/api/getpost', requireLogin, async (req, res) => {
        let response = await axios.get(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    })
}
