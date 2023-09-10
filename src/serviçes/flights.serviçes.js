import citiesRepository from "../repositories/cities.repository.js"
import flightRepository from "../repositories/flights.repository.js"
//import dayjs from 'dayjs';
//import customParseFormat from 'dayjs/plugin/customParseFormat';
// ativar o plugin
//dayjs.extend(customParseFormat);
export async function flightCreateService(origin, destination, data)
{
	// conflict: validade if the destine and origin is different 
	if (origin === destination) throw {type:"conflict",message:"the origin and destination must'nt be the same"}
	
	// validade if the date is before of now
	//console.log(dayjs(data, 'DD-MM-YYYY'))
	
	// not found: cities  database validate part
	const originDatabase = await citiesRepository.readFilterId(origin)
	const destinationDatabase = await citiesRepository.readFilterId(destination) 
	if(originDatabase.rows.length === 0) throw {type:"notFound",message:"origin city don't exist in the database"}
	if(destinationDatabase.rows.length === 0) throw {type:"notFound",message:"destination city don't exist in the database"}
	
	// send the flights to the database 
	await flightRepository.create(origin, destination, data)
}

export async function flightReadService(origin, destination)
{
	let flightsList
	if(destination !== undefined && origin === undefined) 
	{
		const id = await citiesRepository.readFilterName(destination)
		flightsList = await flightRepository.readFilterDestination(id.rows[0].id)
	}
	if(destination === undefined && origin !== undefined) 
	{
		const id = await citiesRepository.readFilterName(origin)
		flightsList = await flightRepository.readFilterOrigin(id.rows[0].id)
	}
	if(destination === undefined && origin === undefined)
	{
		flightsList = await flightRepository.read()
	}
	return flightsList.rows
}