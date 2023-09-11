import dayjs from "dayjs";
import DB from "../database/pg.js";

async function create(origin,destination,date)
{
	await DB.query(`INSERT INTO flights (origin,destination,date) VALUES($1,$2,$3)`,[origin,destination,date]);
}
async function read()
{
	const flights = await DB.query(`SELECT flights.date,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  ORDER by date DESC`)
	return flights 
}
async function readFilterOrigin(origin)
{
	const flights = await DB.query(`SELECT flights.date,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  WHERE origin = $1 ORDER by date DESC`,[origin]); 
	return flights 
}

async function readFilterDestination(destination)
{
	const flights = await DB.query(`SELECT flights.date,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  WHERE destination = $1 ORDER by date DESC`,[destination]); 
	return flights 
}

async function readFilterId(id)
{
	const flights = await DB.query(`SELECT * FROM flights WHERE id = $1`,[id]);
	return flights 
}

async function readFilterLocalAndDate(origin, destination,lowerDate, upperDate)
{
	const lower = dayjs(lowerDate).format('YYYY-MM-DD')
	const flights = await DB.query(`SELECT flights.date as date ,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  
	WHERE destination = $1 OR origin = $2 OR date >= $3 AND date <= $4  ORDER by date DESC`,[destination,origin,lower,upperDate]); 
	return flights
}
const flightRepository = 
{
	create,
	read,
	readFilterOrigin,
	readFilterDestination,
	readFilterId,
	readFilterLocalAndDate
}
export default flightRepository
