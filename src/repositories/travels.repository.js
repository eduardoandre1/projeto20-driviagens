import DB from "../database/pg.js";

async function create(passengerId,flightId)
{
	await DB.query(`INSERT INTO travels ("passengerId","flightId") VALUES ($1,$2)`,[passengerId,flightId]);
}


const travelsRepository = 
{
	create
}
export default travelsRepository