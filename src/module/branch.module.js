import { model, Schema } from "mongoose";

export const BranchModel = model('Branch', new Schema({
    name: {type: String, unique: true},
    time: {type: Date, default: new Date()},
    address_id: {type: Schema.Types.ObjectId, ref: 'Adress'}
}))