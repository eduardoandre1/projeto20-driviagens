import DB from "../database/pg.js";

async function create(firstName,lastName)
{
	await DB.query(`INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)`,[firstName,lastName]);
}
async function readFilter(id)
{
	const passengerId = await DB.query(`SELECT * FROM passengers WHERE id = $1`,[id]);
	return passengerId
}
const passengersRepository = {create,readFilter}

export default passengersRepository