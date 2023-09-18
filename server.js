/*
 * Command-line script for running the server application.
 * Usage:
 *   node server.js
 * Environment variables:
 *   FORGE_CLIENT_ID
 *   FORGE_CLIENT_SECRET
 *   FORGE_BUCKET (optional)
 *   PORT (optional)
 */
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

let app = express();
// INDEX 路由
app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.use(cors());
app.use('/ApsCustomExpressService/', express.static('public'));
app.use('/ApsCustomExpressService/', require('./routes/api.js'));
// app.use(express.static('public'));
// app.use(require('./routes/api.js'));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
