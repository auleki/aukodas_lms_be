import { model, Schema } from 'mongoose'

const cohortSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    projects: {
        type: [Schema.Types.ObjectId],
        ref: "Project"
    },
    mentees: {
        type: [Schema.Types.ObjectId],
        ref: "Mentee"
    },
    mentors: {
        type: [Schema.Types.ObjectId],
        ref: "Mentor"
    }
}, { timestamps: true })

const Cohort = model('Cohort', cohortSchema)

export default Cohort