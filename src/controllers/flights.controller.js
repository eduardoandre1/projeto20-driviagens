import httpStatus from "http-status";
import { flightCreateService, flightReadService } from "../serviçes/flights.serviçes.js";

export async function createFlight(req, res) {
	const {origin,destination,date} =req.body;
	await flightCreateService(origin,destination,date)
	res.status(httpStatus.CREATED).send('flight created')
}

export async function sendFlight(req, res) 
{
	const {origin,destination} = req.query;
	console.log(origin,destination)
	const flight = await flightReadService(origin,destination)
	res.status(httpStatus.OK).send(flight)
}