import flightRepository from "../repositories/flights.repository.js";
import passengersRepository from "../repositories/passengers.repository.js";
import travelsRepository from "../repositories/travels.repository.js";

export async function travelService(passengerId, flightId)
{
	const passenger = await passengersRepository.readFilter(passengerId);
	console.log(passenger.rows.length);
	const flight = await flightRepository.readFilterId(flightId);
	console.log(flight.rows.length);
	if (passenger.rows.length === 0) throw {type:'notFound', message:"Passenger doesn't exist"}
	if (flight.rows.length === 0) throw {type:'notFound', message:"flight doesn't not exist"}
	await travelsRepository.create(passengerId,flightId)
}