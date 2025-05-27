import { Router } from "express";
import permissionController from "../controller/Permission.controller.js";
import validate from '../middleware/validation/Permission.js'
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";


const PermissionRouter = Router()

PermissionRouter.get('/all', chekToken, permission,permissionController.GetAllPermission)
PermissionRouter.get('/single', chekToken, permission,permissionController.GetOnePermission)
PermissionRouter.post('/add',validate, chekToken, permission,permissionController.CreatePermission)
PermissionRouter.put('/update',validate, chekToken, permissionController.UpdatePermission)
PermissionRouter.delete('/delete/:id',validate, chekToken, permission,permissionController.RemovePermission)


export default PermissionRouter