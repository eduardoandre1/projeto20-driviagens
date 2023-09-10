import DB from "../database/pg.js";

async function create(dados)
{
const resultado = await DB.query("INSERT INTO table (id, name) VALUES ($1, ?)", dados);	
}
async function update(dados)
{
	const resultado = await DB.query("UPDATE table (id, name) SET name = ? WHERE id = $1", dados);
}
async function deleter(dados) 
{
	const resultado = await DB.query("DELETE FROM table (id) WHERE id = $1", dados)
}
async function read(dados)
{
	const resultado = await DB.query("SELECT * FROM table (id,name) WHERE id = $1", dados)
	return resultado
}
async function read_multiples_join(dados)
{
	await DB.query(`SELECT table1.name ,t1.name as table2_name, t2.name as table2_name_too FROM table1 LEFT JOIN table2 as t2 ON table1.id = t2.name LEFT JOIN table2 as t3 ON table1.id = t3.name`)
}
const arquivo = 
{
	create,
	read,
	update,
	deleter,
}
export default arquivo