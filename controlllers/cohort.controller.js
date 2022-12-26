import Cohort from "../models/cohort.model.js"

class CohortController {
    async createCohort(req, res) {
        try {
            const newCohort = new Cohort(req.body)
            const savedCohort = await newCohort.save()
            res.status(201).json({ message: "Created new Cohort", data: savedCohort })
        } catch (error) {
            res.status(401).json({ message: "Failed to create Cohort", error })
        }
    }

    async getAllCohorts(req, res) {
        try {
            const cohorts = await Cohort.find({})
            res.status(201).json({ message: "Fetched all cohorts", data: cohorts })
        } catch (error) {
            res.status(401).json({ message: "Failed to fetch all cohorts", error })
        }
    }

    async editCohort(req, res) {
        try {
            const id = req.params.id
            const update = req.body
            // check for certain properties that can only be edited by Mentors with various roles
            const editedCohort = await Cohort.findByIdAndUpdate(id, update, { new: true })
            res.status(201).json({ message: "Changes made to Cohort", data: editedCohort })
        } catch (error) {
            res.status(401).json({ message: "Failed to edit Cohort", error })
        }
    }

    async getSingleCohort(req, res) {
        try {
            const id = req.params.id
            const singleCohort = await Cohort.findOne({ id })
            res.status(201).json({ message: "Fetched single cohort", data: singleCohort })
        } catch (error) {
            res.status(401).json({ message: "Failed to find a single cohort", error })
        }
    }

    async deleteCohort(req, res) {
        try {
            const id = req.params.id
            const deletedCohort = await Cohort.findOneAndDelete({ _id: id })
            // check status of delete operation
            res.status(201).json({ message: "Cohort deleted", data: deletedCohort })
        } catch (error) {
            res.status(401).json({ message: "Failed to delete cohort", error })
        }
    }
}

export default CohortController