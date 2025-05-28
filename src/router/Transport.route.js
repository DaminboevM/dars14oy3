import { Router } from "express";
import transportController from "../controller/Transport.controller.js";
import validate from '../middleware/validation/transport.js'
import chekToken from "../middleware/chekToken.js";
import permission from "../middleware/permission.js";


const TransportRouter = Router()

TransportRouter.get('/single/:branch_id', chekToken, permission, transportController.GetTransport)
TransportRouter.post('/add',validate, chekToken, permission, transportController.CreateTransport)
TransportRouter.put('/update',validate, chekToken, permission, transportController.UpdateTransport)
TransportRouter.delete('/:id',validate, chekToken, permission, transportController.RemoveTransport)


export default TransportRouter