import { Router } from "express";

const rota = Router()
rota.post('/', middleware, controller) // create
rota.get('/', middleware, controller) // read
rota.put('/', middleware, controller) //update
rota.delete('/', middleware, controller) // delete
