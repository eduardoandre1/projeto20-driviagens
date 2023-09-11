
export default function input_validate(schema){
	return (req,res,next)=>{
	const input_test =schema.validate(req.body,{abortEarly:false})
	if(input_test.error) throw {type:"incompleteData", message:input_test.error.message}
	next();
}
}