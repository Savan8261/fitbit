const uri = {
    baseurl : process.env.BASE_URL || "http://localhost:8000",
    clienturl : process.env.CLIENT_URL || "http://localhost:3000",
}

const origin_urls = process.env.ORIGIN.split(",") || "http://localhost:3000,https://fitbit-pro.netlify.app,https://netlify.app"
console.log(origin_urls)


module.exports = {
    uri,
    origin_urls
}