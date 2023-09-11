import httpStatus from "http-status";
import passengersRepository from "../repositories/passengers.repository.js";
import { getPassengersTravel } from "../serviçes/travels.services.js";

export async function createpassenger(req, res)
{
		const {firstName,lastName } = req.body;
		passengersRepository.create(firstName, lastName)
		res.status(httpStatus.CREATED).send('success')
}
export async function showpassengersTravel(req, res)
{
	const {name} = req.query
	const travels = await getPassengersTravel(name)
	res.status(httpStatus.OK).send(travels)
	
}
