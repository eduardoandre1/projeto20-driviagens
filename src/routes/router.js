import { Router } from "express";
import passengers from "./passengers.routes.js";
import cities from "./cities.routes.js";
import flights from "./flights.routes.js";
import travels from "./travels.routes.js";
const router = Router()
//router.use(login)
router.use(passengers)
router.use(cities)
router.use(flights)
router.use(travels)
export default router