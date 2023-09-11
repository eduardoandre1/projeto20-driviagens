import Joi from 'joi'; 
import JoiDate from '@joi/date'; 
const JoiDay = Joi.extend(JoiDate);
const flightSchema = Joi.object(
	{
		date:JoiDay.date().format('DD-MM-YYYY').utc(),
		origin:Joi.required(),
		destination :Joi.required()
	})
export default flightSchema