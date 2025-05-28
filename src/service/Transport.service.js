import { TransportModel } from "../module/transport.module.js"

export class TransportService {
    constructor() {}

    static async ReadTransport (branch_id) {
        const Transports = await TransportModel.findOne({branch_id})
        return {status: 201, messagae: 'Transport success Readed !', data: Transports, seccess: true}
    }



    static async CreateTransport (body) {
        await TransportModel.create(body)
        return {status: 201, messagae: 'Transport success Created !', data: null, seccess: true}
    }
    
    
    static async UpdateTransport (body, id) {
        await TransportModel.updateOne({_id: id, $set: body})
        return {status: 201, messagae: 'Transport success Updated !', data: null, seccess: true}
    }
    
    
    static async DeleteTransport (id) {
        await TransportModel.findByIdAndDelete(id)
        return {status: 201, messagae: 'Transport success Deleted !', data: null, seccess: true}
    }
}