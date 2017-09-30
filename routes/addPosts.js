const config = require('../config/config'),
    axios = require('axios'),
    requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/addpost', requireLogin, async (req, res) => {
        let response = await axios.post(`${config.url}?${config.api_key}`, req.body);
        res.status(200).send(response.data);
    })
}
