import { model, Schema } from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    submissionUrl: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Task = model('Task', taskSchema)
export default Task