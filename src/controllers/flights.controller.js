import httpStatus from "http-status";
import { flightCreateService } from "../serviçes/flights.serviçes.js";

export async function createFlight(req, res) {
	const {origin,destination,date} =req.body;
	await flightCreateService(origin,destination,date)
	res.status(httpStatus.CREATED).send('flight created')
}