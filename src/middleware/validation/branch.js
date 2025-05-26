import { CustomError } from "../../utils/CustomError.js"
import { BranchValidate } from "../../validation/Branch.validation.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.url == '/v1/api/branch/create') {
            const { error } = await BranchValidate.createSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        
        
        if(req.method == 'PUT' && req.url == '/v1/api/branch/update') {
            const { error } = await BranchValidate.changeSchema.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
    } catch (error) {
        next(error)
    }
}