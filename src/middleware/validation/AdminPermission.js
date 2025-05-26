import { CustomError } from "../../utils/CustomError.js"
import { AdminPermissionValidation } from "../../validation/AdminPermission.validate.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.url == '/v1/api/admin/permission/create') {
            const { error } = await AdminPermissionValidation.createSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.url == '/v1/api/admin/permission/update') {
            const { error } = await AdminPermissionValidation.changeSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
    } catch (error) {
        next(error)
    }
}