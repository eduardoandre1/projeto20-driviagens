import citiesRepository from "../repositories/cities.repository.js"
import flightRepository from "../repositories/flights.repository.js"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import isAfter from 'dayjs/plugin/isSameOrAfter.js';
// ativar o plugin
dayjs.extend(customParseFormat);
dayjs.extend(isAfter);
export async function flightCreateService(origin, destination, data)
{
	// conflict: validade if the destine and origin is different 
	if (origin === destination) throw {type:"conflict",message:"the origin and destination must'nt be the same"}
	
	// validade if the date is after  of now
	const dateDatabase = dayjs(data, 'DD-MM-YYYY')
	const now = new Date()
	const isAfter =dateDatabase.isAfter(now)
	if (isAfter === false) throw {type:"incompleteData", message:"the date is before of now this flight's date is invalid"}
	// not found: cities  database validate part
	const originDatabase = await citiesRepository.readFilterId(origin)
	const destinationDatabase = await citiesRepository.readFilterId(destination) 
	if(originDatabase.rows.length === 0) throw {type:"notFound",message:"origin city don't exist in the database"}
	if(destinationDatabase.rows.length === 0) throw {type:"notFound",message:"destination city don't exist in the database"}
	
	// send the flights to the database 
	await flightRepository.create(origin, destination, dateDatabase)
}

export async function flightReadService(origin, destination,lowerDate,upperDate)
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
	if(lowerDate !== undefined && upperDate !== undefined)
	{
		const lower = dayjs(lowerDate, 'DD-MM-YYYY')
		const upper = dayjs(upperDate, 'DD-MM-YYYY')
		const originId = origin===undefined?0: (await citiesRepository.readFilterName(origin)).rows[0].id
		const destinationId =destination===undefined?0:(await citiesRepository.readFilterName(destination)).rows[0].id
		flightsList = await flightRepository.readFilterLocalAndDate(destinationId,originId.id,lower,upper)
	}
	if(origin === undefined && upperDate && lowerDate && destination)
	{
		const lower = dayjs(lowerDate, 'DD-MM-YYYY')
		const upper = dayjs(upperDate, 'DD-MM-YYYY')
		const destinationId =destination===undefined?0:(await citiesRepository.readFilterName(destination)).rows[0].id
		flightsList = await flightRepository.readFilterHalfLocaAndDate(origin,destinationId,lower,upper) 
	}
	if(origin !== undefined && upperDate && lowerDate && destination === undefined)
	{
		const lower = dayjs(lowerDate, 'DD-MM-YYYY')
		const upper = dayjs(upperDate, 'DD-MM-YYYY')
		const originId = origin===undefined?0: (await citiesRepository.readFilterName(origin)).rows[0].id
		flightsList = await flightRepository.readFilterHalfLocaAndDate(originId,destination,lower,upper)
	}
	if(!origin && !destination && lowerDate && upperDate)
	{
		const lower = dayjs(lowerDate, 'DD-MM-YYYY')
		const upper = dayjs(upperDate, 'DD-MM-YYYY')
		flightsList = await flightRepository.readFilterDate(lower,upper)
	}
	return flightsList.rows
}