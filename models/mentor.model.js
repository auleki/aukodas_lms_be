import { model, Schema } from "mongoose";

const mentor = new Schema({
    name: {
        first: String,
        last: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    }
}, { timestamps: true })

const Mentor = model('Mentor', mentor)

export default Mentor