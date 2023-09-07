import DB from "../database/pg.js";

async function create(firstName,lastName)
{
	await DB.query(`INSERT INTO passengers ("firstName","lastName") VALUES ($1,$2)`,[firstName,lastName]);
}

const passengersRepository = {create}

export default passengersRepository