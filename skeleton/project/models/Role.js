import { Schema, model } from "mongoose";

const User = new Schema({
    value: {type: String, unique: true, default: 'USER'},
})

export default model('Role', Role)

