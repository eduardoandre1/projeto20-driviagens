import httpStatus from "http-status"

export function controler(req,res)
{
	//get the data by req 
		//const {data} = req.body; // dados de entrada da função de vem em forma de um objeto
		//const {data} =req.params; // fundametão para rotas get e delete que não recebem requisiões pelo body
		//const {data} = req.headers; // muito usado para validações de tokens 
	// usar pasta de serviçe para usar as regras de negocio
		
	res.status(httpStatus.OK).send(http.OK)
}
