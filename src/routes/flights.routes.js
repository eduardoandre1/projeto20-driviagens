import { Router } from "express";
import { createFlight } from "../controllers/flights.controller.js";
import input_validate from "../middlewares/inputValidation.midllewares.js";
import flightSchema from "../schemas/flights.schema.js";
const flights = Router()
flights.get("/flights")
flights.post("/flights",createFlight)

export default flights