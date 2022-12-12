import { model, Schema } from 'mongoose'

const cohortSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: [Schema.Types.ObjectId],
        ref: "Task"
    },
    mentees: {
        type: [Schema.Types.ObjectId],
        ref: "Mentee"
    },
    mentors: {
        type: [Schema.Types.ObjectId],
        ref: "Mentors"
    }
}, { timestamps: true })

const Cohort = model('Cohort', cohortSchema)

export default Cohort