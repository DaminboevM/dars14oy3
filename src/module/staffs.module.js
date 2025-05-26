import { model, Schema } from "mongoose";

export const StaffModel = model('Staff', new Schema({
    branch_id: {type: String, ref: 'Branch'},
    email: {type: String, unique: true},
    username: {type: String, unique: true},
    password: String,
    birthDate: Date,
    gender: {type: String, enum: ['Female', 'Male']},
    role: {type: String, default: 'Staff'}
}))