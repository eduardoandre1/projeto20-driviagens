import citiesRepository from "../repositories/cities.repository.js";

export async function citiesServiçe(name)
{
	const cities = await citiesRepository.readFilter(name)
	console.log(cities.rows)
	if(cities.rowCount !== 0) throw {type:"conflict" ,message :"this cities is already in collection"}
	console.log("come back to")
	await citiesRepository.create(name)
}