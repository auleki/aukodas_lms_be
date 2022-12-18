import { model, Schema } from 'mongoose'

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    resources: {
        type: [Schema.Types.ObjectId],
        ref: "Resource"
    },
    tasks: {
        type: [Schema.Types.ObjectId],
        ref: "Task"
    },
    quiz: {
        type: [Schema.Types.ObjectId],
        ref: "Quiz"
    },
    score: {
        type: Number
    }
}, { timestamps: true })

const Project = model('Project', projectSchema)

export default Project