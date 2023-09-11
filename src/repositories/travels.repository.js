import DB from "../database/pg.js";

async function create(passengerId,flightId)
{
	await DB.query(`INSERT INTO travels ("passengerId","flightId") VALUES ($1,$2)`,[passengerId,flightId]);
}
async function readByPassenger()
{
	const travels = await DB.query(`SELECT passengers."firstName",passengers."lastName", COUNT(travels."passengerId") AS "applications"
	FROM passengers
	left JOIN  travels ON travels."passengerId"=passengers.id
	GROUP BY passengers.id;`)
	return travels
}
async function readByPassengersFilterName(name)
{
	const travels = await DB.query(`SELECT passengers."firstName" , passengers."lastName", COUNT(travels."passengerId") AS "applications"
	FROM passengers
	LEFT JOIN  travels ON travels."passengerId"=passengers.id
	WHERE passengers."firstName" ILIKE '%${name}%' OR passengers."lastName" ILIKE '%${name}%'
	GROUP BY passengers.id`,)
	return travels
}

const travelsRepository = 
{
	create,
	readByPassenger,
	readByPassengersFilterName
}
export default travelsRepository