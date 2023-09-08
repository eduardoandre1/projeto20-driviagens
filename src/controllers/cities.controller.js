import httpStatus from "http-status";
import { citiesServiçe } from "../serviçes/cities.serviçes.js";
export function addCitie(req,res,next)
{
	const {name} = req.body
	citiesServiçe(name,next)
	return res.status(httpStatus.CREATED).send('created successfully')
}