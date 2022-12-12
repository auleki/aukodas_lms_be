import { model, Schema } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Task = model('Task', taskSchema)