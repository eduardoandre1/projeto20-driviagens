import httpStatus from "http-status";
import { citiesServiçe } from "../serviçes/cities.serviçes.js";
export async function addCitie(req,res)
{
	const {name} = req.body
	await citiesServiçe(name)
	return res.status(httpStatus.CREATED).send('created successfully')
}