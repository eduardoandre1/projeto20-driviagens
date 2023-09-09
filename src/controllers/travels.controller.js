import httpStatus from "http-status"
import { travelService } from "../serviçes/travels.services.js";

export async function createTravels(req, res, next) 
{
	const {passengerId, flightId} = req.body;
	await travelService(passengerId,flightId)
	res.status(httpStatus.CREATED).send("Successfully created travel")
}
