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
	const upper = dayjs(upperDate).format('YYYY-MM-DD')
	const flights = await DB.query(`SELECT flights.date as date ,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  
	WHERE destination = $1 AND  origin = $2 AND date >= $3 AND date <= $4  ORDER by date DESC`,[destination,origin,lower,upper]); 
	return flights
}
async function readFilterDate(lowerDate,upperDate)
{
	const lower = dayjs(lowerDate).format('YYYY-MM-DD')
	const upper = dayjs(upperDate).format('YYYY-MM-DD')
	const flights = await DB.query(`SELECT flights.date as date ,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  
	WHERE date >= $1 AND date <= $2  ORDER by date DESC`,[lower,upper]); 
	return flights
}
async function readFilterHalfLocaAndDate(origin, destination,lowerDate, upperDate)
{
	const lower = dayjs(lowerDate).format('YYYY-MM-DD')
	const upper =  dayjs(upperDate).format('YYYY-MM-DD')
	let flight 
	if(!origin)
	{
		flight = await DB.query(`SELECT flights.date as date ,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  
		WHERE destination = $1 AND date >= $2 AND date <= $3  ORDER by date DESC`,[destination,lower,upper]); 
		return flights
	}
	if(!destination)
	{
		flight = await DB.query(`SELECT flights.date as date ,c2.name as destination, c1.name as origin from flights inner join  cities as c1  ON flights.origin = c1.id inner join cities as c2 ON flights.destination = c2.id  
		WHERE destination = $1 AND date >= $2 AND date <= $3  ORDER by date DESC`,[destination,lower,upper]); 
		return flights
	}
}
const flightRepository = 
{
	create,
	read,
	readFilterOrigin,
	readFilterDestination,
	readFilterId,
	readFilterLocalAndDate,
	readFilterHalfLocaAndDate,
	readFilterDate
}
export default flightRepository
