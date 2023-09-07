import { Router } from "express";
import passengers from "./passengers.routes.js";
const router = Router()
//router.use(login)
router.use(passengers)
export default router