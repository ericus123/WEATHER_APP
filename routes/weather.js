import getweatherController from  '../controllers/getWeather'
import validateWeather from '../middlewares/validations'
import checkCors from '../middlewares/cors'
import Router from 'express'
const getweatherRoute = new Router()   
getweatherRoute.get('/:city',checkCors,getweatherController);
export default getweatherRoute