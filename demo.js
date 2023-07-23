const http = require('http');

const port = 8089;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("hello, here is your requested data");
});
server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("server started at", port);
});