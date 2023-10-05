const canned = require('canned')
const http = require('http')
const opts = { logger: process.stdout }

const can = canned("./cannedResponses", opts)

http.createServer(can).listen(5000)