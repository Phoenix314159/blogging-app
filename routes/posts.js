const {url, api_key} = require('../config/config'),
  axios = require('axios'),
  requireLogin = require('../middleware/requireLogin'),
  {auth} = require('../middleware/auth'),
  error = 'an error occurred'

module.exports = app => {

  app.get('/api/getposts', requireLogin, auth, async (req, res) => {
    try {
      const {data} = await axios.get(`${url}?${api_key}`)
      res.status(200).send(data)
    }
    catch (err) {
      console.log(err)
      res.send(error)
    }
  })

  app.get('/api/getpost', requireLogin, auth, async (req, res) => {
    const {id} = req.query
    try {
      const {data} = await axios.get(`${url}/${id}?${api_key}`)
      res.status(200).send(data)
    }
    catch (err) {
      console.log(err)
      res.status(500).send(error)
    }
  })

  app.post('/api/addpost', requireLogin, auth, async (req, res) => {
    const {body} = req
    try {
      const {data} = await axios.post(`${url}?${api_key}`, body)
      res.status(200).send(data)
    }
    catch (err) {
      console.log(err)
      res.status(500).send(error)
    }

  })

  app.delete('/api/deletepost', requireLogin, auth, async (req, res) => {
    const {id} = req.query
    try {
      const {data} = await axios.delete(`${url}/${id}?${api_key}`)
      res.status(200).send(data)
    }
    catch (err) {
      console.log(err)
      res.status(500).send('an error occurred')
    }
  })
}
