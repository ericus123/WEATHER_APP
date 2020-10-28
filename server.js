const express = require('express')
const axios = require('axios');
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    console.log(req.body.city);
    let city = "texas";
    let apiKey = "0cc41616cfa81fed21776d2bcb218938"
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.post(url)
  .then(function (response) {
    // handle success
 let weather = response.data;
             console.log( `It's ${weather.main.temp} degrees in ${weather.name}!`);
  })
  .catch(function (error) {
    // handle error
    console.log({ error: 'Error, please try again'})
  })
  })