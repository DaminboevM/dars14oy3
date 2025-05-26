import { CustomError } from "../../utils/CustomError.js"
import { TransportValidation } from "../../validation/transport.validation.js"

export default async (req, res, next) => {
    try {
        if(req.method == 'POST' && req.url == '/v1/api/transport/create') {
            const { error } = await TransportValidation.RegisterScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
        

        if(req.method == 'PUT' && req.url == '/v1/api/transport/update') {
            const { error } = await TransportValidation.ChangeScheme.validate(req.body)
            if(error) throw new CustomError(403, error.details[0].message)
        }
    } catch (error) {
        next(error)
    }
}