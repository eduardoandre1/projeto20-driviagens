import { Router } from "express";
import { createpassenger, showpassengersTravel } from "../controllers/passengers.controller.js";
import input_validate from "../middlewares/inputValidation.midllewares.js";
import passengersSchema from "../schemas/passengers.schema.js";
const passengers = Router()
passengers.post("/passengers",input_validate(passengersSchema),createpassenger)
passengers.get("/passengers/travels",showpassengersTravel)

export default passengers
