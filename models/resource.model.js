import { model, Schema } from 'mongoose'

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}, { timestamps: true })

const Resource = model('Resource', resourceSchema)
export default Resource