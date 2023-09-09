import DB from "../database/pg.js";
async function create(name)
{
	await DB.query(`INSERT INTO cities (name) VALUES ($1)`,[name])
}
async function readFilterName(name)
{
	const cities = await DB.query(`SELECT * FROM cities WHERE name = $1`,[name])
	console.log(cities.rowCount)
	return cities
}
async function readFilterId(id)
{
	const cities = await DB.query(`SELECT * FROM cities WHERE id = $1`,[id])
	return cities
}
const citiesRepository = 
{
	create,
	readFilterName,
	readFilterId
}
export default citiesRepository