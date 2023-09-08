import DB from "../database/pg.js";
async function create(name)
{
	await DB.query(`INSERT INTO cities (name) VALUES ($1)`,[name])
}
async function read_filter(name)
{
	const cities = await DB.query(`SELECT * FROM cities WHERE name = $1`,[name])
	return cities
}
const citiesRepository = 
{
	create,
	read_filter
}
export default citiesRepository