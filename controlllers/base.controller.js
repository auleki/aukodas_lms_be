import { Response } from 'express'
import mongoose from 'mongoose'


class BaseController {
    // define methods that other controllers
    // can inherit
    public useModReturnNew = { useFindAndModify: false, new: true }
    public model

    constructor(model) {
        this.model = model
    }

    jsonRes(doc, res) {
        res.status(200).json(doc)
    }

    errRes(err, res, message, status = 500) {
        // check if env is production and use another approach for that
        res.status(status).json({ error: message })
    }

    async create(res, document, populate, errMsg = 'Failed to create') {
        try {
            const created = await this.model.create(document)
            if (populate) {
                const populated = await created.populate(populate).execPopulate()
                this.jsonRes(populated, res)
            } else {
                this.jsonRes(created, res)
            }
        } catch (error) {
            this.errRes(error, res, errMsg)
        }
    }

    find(res, populate, errMsg = "Failed to find some documents") {
        this.model.find(populate).then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) })
    }

    findById(res, documentId, populate, errMsg = `Failed to find document of ID: ${documentId}`) {
        this.model.findById(documentId, populate)
            .then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) })
            .catch(err => this.errRes(err, res, 'Failed to retrieve doc'))
    }

    findOne(res, query, populate, errMsg = `Failed to find document ${query}`) {
        this.model.findOne(query, populate)
            .then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) })
            .catch(err => this.errRes(err, res, 'Failed to retrieve doc'))
    }

    updateById(res, documentId, document, populate, errMsg = `Failed to update document ${documentId}`) {
        this.model.updateById(documentId, document, populate)
            .then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) })
            .catch(err => this.errRes(err, res, errMsg))
    }

    deleteById(res, documentId, errMsg = `Failed to update delete ${documentId}`) {
        this.model.updateById(documentId)
            .then(doc => { this.jsonRes(doc, res) }, err => { this.errRes(err, res, errMsg) })
            .catch(err => this.errRes(err, res, errMsg))
    }
}

export default BaseController
