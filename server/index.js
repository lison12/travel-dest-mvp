const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo');
const axios = require('axios');
const api = require('../config.js');

const port = 3000;
var app = express();


app.use(express.static(__dirname + '/../react-client/dist'));


app.get(`/attractions/:city`, (req, res) => {
  axios({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.city}+point+of+interest&key=${api.GOOGLE_API_KEY}`
  })
    .then(data => {
      // console.log('server data>>>>>>>', data)
      res.status(200).send(data.data.results);
    })
    .catch(error => {
      // console.log('server error>>>>>>>', error)
      res.status(500).send(error);
    });
});


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`Server listening on port: ${port}!`);
});

