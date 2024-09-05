const express = require('express');
const request = require('request');
const app = express();
const port = 8080; // Port for the server

// Proxy for CSS files
app.use('/proxy/css', (req, res) => {
    const url = `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap`;
    req.pipe(request(url)).pipe(res);
    res.setHeader('Content-Type', 'text/css');
});

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});

