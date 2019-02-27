const express = require('express');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(compression());
app.use(cors());

const port = 5000;

app.use(express.static(`${__dirname}/public`))

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))