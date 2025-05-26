import { CustomError } from "../../utils/CustomError.js"
import { PermissionValidation } from "../../validation/Permission.validate.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.url == '/v1/api/permission/create') {
            const { error } = await PermissionValidation.createSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.url == '/v1/api/permission/update') {
            const { error } = await PermissionValidation.changeSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
    } catch (error) {
        next(error)
    }
}