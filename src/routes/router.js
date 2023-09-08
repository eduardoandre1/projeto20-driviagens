import { Router } from "express";
import passengers from "./passengers.routes.js";
import cities from "./cities.routes.js";
const router = Router()
//router.use(login)
router.use(passengers)
router.use(cities)

export default router