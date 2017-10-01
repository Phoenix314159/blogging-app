process.env.PWD = process.cwd();

module.exports = {
    dirname: process.env.PWD,
    port: process.env.PORT,
    url: process.env.URL,
    apiKey: process.env.API_KEY,
    cookieKey: process.env.COOKIE_KEY,
    cookieAge: process.env.COOKIE_AGE,
    mongoURI: process.env.MONGO_URI
}
