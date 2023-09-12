import cors from 'cors'
import express, { json } from 'express'
import 'express-async-errors' // sempre tem que esta depois do import express
import router from './routes/router.js'
import errorHandler from './middlewares/erros.pach.js' // sempre tem que ser o ultimo import 

const app = express()

app.use(cors())
app.use(json())
app.use(router)
app.use(errorHandler)// sempre tem que vir por ultimo 

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`api running in port:${port}`))
