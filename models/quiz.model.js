import { model, Schema } from 'mongoose'

const quizSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    options: {
        type: [Object],
        required: true
    },
    correctAnswer: {
        type: Object,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Mentor"
    }
}, { timestamps: true })

const Quiz = model('Quiz', quizSchema)

export default Quiz