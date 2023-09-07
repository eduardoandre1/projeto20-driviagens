import Joi from "joi";
const citiesSchema = Joi.object(
	{
		name: Joi.string().required()
	})
export default citiesSchema