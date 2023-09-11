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
	const lowerDate = req.query['smaller-date']
	const upperDate = req.query['bigger-date']
	console.log(origin,destination,)
	const flight = await flightReadService(origin,destination,lowerDate,upperDate)
	res.status(httpStatus.OK).send(flight)
}