import { Router } from "express";
import branchController from "../controller/Branch.controller.js";
import validate from '../middleware/validation/branch.js'
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";


const BranchRouter = Router()

BranchRouter.get('/all', chekToken, permission, branchController.GetAllBranch)
BranchRouter.get('/single', chekToken, permission, branchController.GetOneBranch)
BranchRouter.post('/add',validate, chekToken, permission, branchController.CreateBranch)
BranchRouter.put('/update/:id',validate, chekToken, permission, branchController.UpdateBranch)
BranchRouter.delete('/delete/:id',validate, chekToken, permission, branchController.RemoveBranch)


export default BranchRouter