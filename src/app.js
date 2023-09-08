import cors from 'cors'
import express, { json } from 'express'
import 'express-async-errors'
import router from './routes/router.js'
import DB from './database/pg.js'
import errorHandler from './middlewares/erros.pach.js'

const app = express()

app.use(cors())
app.use(json())
app.use(router)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`api running in port:${port}`))
