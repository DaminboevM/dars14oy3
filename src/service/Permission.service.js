import { PermissionModel } from "../module/Permission.module.js";

export class PermissionService {
    constructor() {}

    static async ReadPermisions () {
        const permisions = await PermissionModel.find()
        return {status: 201, messagae: 'Permission success Readed !', data: permisions, seccess: true}
    }

    static async ReadOnePermision(query = null) {
        const permision = await PermissionModel.find(query)
        return { status: 200, message: 'Permission succes Readed !', data: permision, success: true }
    }


    static async AddPermission (body) {
        await PermissionModel.create(body)
        return {status: 201, messagae: 'Permission success Created !', data: null, seccess: true}
    }
    
    
    static async ChangePermission (body, id) {
        await PermissionModel.updateOne({_id: id, $set: body})
        return {status: 201, messagae: 'Permission success Updated !', data: null, seccess: true}
    }
    
    
    static async DeletePermission (id) {
        await PermissionModel.findById(id)
        return {status: 201, messagae: 'Permission success Deleted !', data: null, seccess: true}
    }
}