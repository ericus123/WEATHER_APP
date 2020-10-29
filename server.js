import express from 'express'
import bodyParser from 'body-parser'
import getweatherRoute from './routes/weather'

 require('dotenv').config();
 require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});
const port = process.env.PORT || 3000;
const app = express()
app.use('/weather',getweatherRoute)

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.listen(port, function () {
  console.log(`app listening on port ${port}!`)
})

app.use(bodyParser.urlencoded({ extended: true }));

