import httpStatus from "http-status";
import passengersRepository from "../repositories/passengers.repository.js";

export async function createpassenger(req, res)
{
		const {firstName,lastName } = req.body;
		passengersRepository.create(firstName, lastName)
		res.status(httpStatus.CREATED).send('success')
}
