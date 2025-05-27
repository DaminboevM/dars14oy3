import { Router } from "express";
import BranchRouter from "./Branch.route.js";
import TransportRouter from "./Transport.route.js";
import StaffRouter from "./Staff.route.js";
import PermissionRouter from "./Permission.route.js";
import AdminPermissionRouter from "./AdminPermission.route.js";

const router = Router()

router.use('/branch', BranchRouter)
router.use('/transport', TransportRouter)
router.use('/staff', StaffRouter)
router.use('/permission', PermissionRouter)
router.use('/admin/permission', AdminPermissionRouter)


export default router