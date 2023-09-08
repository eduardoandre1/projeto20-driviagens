import DB from "../database/pg.js";
async function create(name)
{
	await DB.query(`INSERT INTO cities (name) VALUES ($1)`,[name])
}
async function readFilter(name)
{
	const cities = await DB.query(`SELECT * FROM cities WHERE name = $1`,[name])
	console.log(cities.rowCount)
	return cities
}
const citiesRepository = 
{
	create,
	readFilter
}
export default citiesRepository