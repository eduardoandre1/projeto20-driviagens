import Joi from 'joi';
const passengersSchema = Joi.object(
	{
		firstName: Joi.string().min(2).max(100).required(),
		lastName: Joi.string().min(2).max(100).required() 
	})

export default passengersSchema