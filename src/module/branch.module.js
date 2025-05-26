import { model, Schema } from "mongoose";

export const UserModel = model('User', new Schema({
    name: {type: String, unique: true},
    time: {type: Date, default: new Date()},
    address_id: {}
}))