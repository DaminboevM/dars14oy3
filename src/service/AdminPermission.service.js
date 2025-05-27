import { AdminPermisionModel } from "../module/adminPermission.module.js"

export class AdminPermissionService {
    constructor() {}

    static async ReadPermisions () {
        const permisions = await AdminPermisionModel.find()
        return {status: 201, messagae: 'AdminPermission success Readed !', data: permisions, seccess: true}
    }

    static async ReadOnePermision(query = null) {
        const permision = await AdminPermisionModel.find(query)
        return { status: 200, message: 'AdminPermission succes Readed !', data: permision, success: true }
    }


    static async AddPermission (body) {
        await AdminPermisionModel.create(body)
        return {status: 201, messagae: 'AdminPermission success Created !', data: null, seccess: true}
    }
    
    
    static async ChangePermission (body) {
        await AdminPermisionModel.updateOne({_id: body.staff_id, $set: body})
        return {status: 201, messagae: 'AdminPermission success Updated !', data: null, seccess: true}
    }
    
    
    static async DeletePermission (id) {
        await AdminPermisionModel.findById(id)
        return {status: 201, messagae: 'AdminPermission success Deleted !', data: null, seccess: true}
    }
}