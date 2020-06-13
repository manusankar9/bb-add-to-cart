const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);

app.listen(port, () => console.log(`Running on localhost:${port}`));