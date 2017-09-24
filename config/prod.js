process.env.PWD = process.cwd();

module.exports = {
    proc: process.env.PWD,
    port: process.env.PORT,
    url: process.env.URL,
    apiKey: process.env.API_KEY
}
