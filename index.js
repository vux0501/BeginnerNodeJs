const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('Helloss')
})

app.listen(port, ()=> console.log(`listen: ${port}`))