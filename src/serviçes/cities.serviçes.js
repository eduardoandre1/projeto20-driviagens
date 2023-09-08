import citiesRepository from "../repositories/cities.repository.js";

export function citiesServiçe(name)
{
	const cities = citiesRepository.read_filter(name)
	if(cities.countRows !== 0) throw {type:"conflict" ,message :"this cities is already in collection"}
	else{citiesRepository.create(name)}
}