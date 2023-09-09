import Joi from 'joi'; 
import JoiDate from '@joi/date'; 
Joi.extend(JoiDate);
const flightSchema = Joi.object(
	{
		//date: Joi.date().format('DD-MM-YYYY'),
	})
export default flightSchema