import { Router } from "express";
import { createFlight, sendFlight } from "../controllers/flights.controller.js";
import input_validate from "../middlewares/inputValidation.midllewares.js";
import flightSchema from "../schemas/flights.schema.js";
const flights = Router()
flights.get("/flights",sendFlight)
flights.post("/flights",createFlight)

export default flights