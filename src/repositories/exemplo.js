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
const arquivo = 
{
	create,
	read,
	update,
	deleter,
}
export default arquivo