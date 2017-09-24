const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/getpost', async (req, res) => {
        let response = await axios.get(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    })
}
