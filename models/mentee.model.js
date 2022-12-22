import { model, Schema } from 'mongoose'

const menteeSchema = new Schema({
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
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        trim: true
    },
    level: {
        type: Number
    },
    currentCohort: {
        cohort: {
            type: Schema.Types.ObjectId,
            ref: "Cohort",
        },
        projects: {
            type: [Schema.Types.ObjectId],
            ref: "Project"
        }
    },
    // which would involve their average score for the current cohort
    records: Array
}, { timestamps: true })

const Mentee = model('Mentee', menteeSchema)

export default Mentee