import flightRepository from "../repositories/flights.repository.js";
import passengersRepository from "../repositories/passengers.repository.js";
import travelsRepository from "../repositories/travels.repository.js";

export async function travelService(passengerId, flightId)
{
	const passenger = await passengersRepository.readFilter(passengerId);
	const flight = await flightRepository.readFilterId(flightId);
	if (passenger.rows.length === 0) throw {type:'notFound', message:"Passenger doesn't exist"}
	if (flight.rows.length === 0) throw {type:'notFound', message:"flight doesn't not exist"}
	await travelsRepository.create(passengerId,flightId)
}
export async function getPassengersTravel(name)
{
	let passengerTravels
	if (!name)
	{
		passengerTravels = await travelsRepository.readByPassenger()
	}
	if(name !== undefined)
	{
		passengerTravels = await travelsRepository.readByPassengersFilterName(name)
	}
	if(passengerTravels.rowCount >= 10) throw {type: 'error', message:'Too many results'}
	const travels = passengerTravels.rows.map((data)=>{return {passenger:`${data.firstName} ${data.lastName}`,travels:data.applications}})
	return travels
}
