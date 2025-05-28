import { Router } from "express";
import staffController from "../controller/Staff.controller.js";
import validate from '../middleware/validation/Staff.js'
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";


const StaffRouter = Router()

StaffRouter.get('/all', chekToken, permission, staffController.GetAllStaff)
StaffRouter.get('/single', chekToken, permission, staffController.GetStaff)
StaffRouter.post('/register',validate, staffController.Register)
StaffRouter.get('/verify', staffController.Verify)
StaffRouter.post('/login',validate, staffController.Login)
StaffRouter.put('/update',validate, chekToken, permission, staffController.UpdateStaff)
StaffRouter.delete('/delete/:id',validate, chekToken, permission, staffController.RemoveStaff)


export default StaffRouter