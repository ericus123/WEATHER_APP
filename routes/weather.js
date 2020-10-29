import getweatherController from  '../controllers/getWeather'
import validateWeather from '../middlewares/validations'
import Router from 'express'
const getweatherRoute = new Router()
getweatherRoute.get('/:city',validateWeather,getweatherController);
export default getweatherRoute