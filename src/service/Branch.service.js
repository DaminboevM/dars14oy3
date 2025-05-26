import { BranchModel } from "../module/branch.module.js";

class BranchService {
    constructor() {}

    static async AddBranch (body) {
        BranchModel.create(body)
    }
}