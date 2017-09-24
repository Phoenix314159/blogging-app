const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/getposts', async (req, res) => {
        let response = await axios.get(`${config.url}?${config.api_key}`);
        console.log(response.data)
        res.status(200).send(response.data);
    })
}