import { Router } from "express";
import BranchRouter from "./Branch.route.js";

const router = Router()

router.use('/branch', BranchRouter)


export default router