import { model, Schema } from "mongoose";

const mentor = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        },
        username: {
            type: String,
            unique: true
        }
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