import { Router } from "express";
import input_validate from "../middlewares/inputValidation.midllewares.js";
import citiesSchema from "../schemas/cities.schema.js";
import { addCitie } from "../controllers/cities.controller.js";

const cities = Router()
cities.post("/cities",input_validate(citiesSchema),addCitie)

export default cities