import { Schema, model } from "mongoose";

const User = new Schema({
    email:              {type: String, unique: true, required: true},
    username:           {type: String, unique: true, required: true},
    password:           {type: String, required: true},
    confirmPassword:    {type: String, required: true},
    tac:                {type: Boolean, required: true}
})

export default model('User', User)


