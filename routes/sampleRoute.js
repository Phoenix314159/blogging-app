const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/getinfo', async (req, res) => {

        let response = await axios.get(config.apiUrl);

        res.status(200).send(response);
    })
}