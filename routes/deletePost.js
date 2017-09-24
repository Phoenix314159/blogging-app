const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {
    app.delete('/api/deletepost', async (req, res) => {
        let response = await axios.delete(`${config.url}/${req.query.id}?${config.api_key}`);
        res.status(200).send(response.data);
    })
}
