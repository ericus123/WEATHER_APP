import axios from 'axios'
 require('dotenv').config();

const getweatherController = async (req,res) => {
    let city = req.params.city
    let apiKey = process.env.apiKey;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.post(url)
  .then(function (response) {
    // handle success
    
 let weather = response.data;
 let icon;
 let description;
 const celsius =  parseInt((weather.main.temp -32) * 5/9,10)

 let weatherDetails = weather.weather;
 weatherDetails.forEach(element => {
    for (const item in element) {
      if (item == 'icon') {
         icon = element.icon
      }
      if (item == 'description') {
        description = element.description
      }
    }
 });
 const details = {
  country:weather.sys.country,
  city:weather.name,
  icon:icon,
  description:description,
  temp:celsius 
}
 res.status(200).json({message:`It's ${celsius} degrees celisius in ${weather.name}!`,details:details})
  })
  .catch(function (error) {
    // handle error
    res.status(400).json({ error: 'Error,please try again'})
  })
} 

export default getweatherController;