import { Router } from "express";
import { createTravels } from "../controllers/travels.controller.js";
const travels = Router()
travels.post("/travels",createTravels)
export default travels