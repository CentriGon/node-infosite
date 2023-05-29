const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    const urlS = req.url;
    console.log("URL:" + urlS);
    if (req.url === '/favicon.ico') {
        // Ignore the favicon.ico request
        res.statusCode = 204; // No content
        res.end();
        console.log("favicon")
        return;
    }
    else if (urlS == "/" || urlS == "/index.html") {
        fs.readFile("./index.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if (urlS == "/contact-me.html") {
        fs.readFile("./contact-me.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else if (urlS == "/about.html") {
        fs.readFile("./about.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else {
        fs.readFile("./404.html", (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    
}).listen(8080);
