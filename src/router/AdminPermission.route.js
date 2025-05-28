import { Router } from "express";
import validate from '../middleware/validation//AdminPermission.js'
import chekToken from "../middleware/chekToken.js";
import adminPermissionController from "../controller/AdminPermission.controller.js";
import permission from "../middleware/permission.js";


const AdminPermissionRouter = Router()

AdminPermissionRouter.get('/all', chekToken, permission,adminPermissionController.GetAllPermission)
AdminPermissionRouter.get('/single',chekToken, permission, adminPermissionController.GetOnePermission)
AdminPermissionRouter.post('/add',validate, chekToken, permission, adminPermissionController.CreatePermission)
AdminPermissionRouter.put('/update',validate, chekToken, permission, adminPermissionController.UpdatePermission)
AdminPermissionRouter.delete('/delete/:id',validate, chekToken, permission, adminPermissionController.RemovePermission)


export default AdminPermissionRouter