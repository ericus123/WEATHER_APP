import express from 'express'
import bodyParser from 'body-parser'
import getweatherRoute from './routes/weather'

 require('dotenv').config();
 require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

const app = express()
app.use('/weather',getweatherRoute)

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

app.use(bodyParser.urlencoded({ extended: true }));

