import DB from "../database/pg.js";

async function create(origin,destination,date)
{
	await DB.query(`INSERT INTO flights (origin,destination,date) VALUES($1,$2,$3)`,[origin,destination,date]);
}
async function read()
{
	const flights = await DB.query(`SELECT * FROM flights ORDER by date DESC`)
	return flights 
}
async function readFilterOrigin(origin)
{
	const flights = await DB.query(`SELECT * FROM flights WHERE origin = $1 ORDER by date DESC`,[origin]);
	return flights 
}
async function readFilterId(id)
{
	const flights = await DB.query(`SELECT * FROM flights WHERE id = $1`,[id]);
	return flights 
}
const flightRepository = 
{
	create,
	read,
	readFilterOrigin,
	readFilterId
}
export default flightRepository
