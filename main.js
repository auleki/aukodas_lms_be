import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import authRoutes from "./routes/auth.routes.js"
import cohortRoutes from "./routes/cohort.routes.js"

const app = express()
const PORT = process.env.PORT || 5000

class Server {
	#versioning = "/api/v1"
	constructor() {
		this.useMiddlewares()
		this.addRoutes()
		this.connectToDb()
	}

	useMiddlewares() {
		app.use(morgan('dev'))
		app.use(cors())
		app.use(express.json())
	}

	newRoute(path) {
		return `${this.#versioning}/${path}`
	}

	addRoutes() {
		app.use(this.newRoute("auth"), authRoutes)
		app.use(this.newRoute("cohort"), cohortRoutes)
	}

	async connectToDb() {
		const dbUrl = process.env.DATABASE_URL || ""
		mongoose.set({ strictQuery: false })
		try {
			await mongoose.connect(dbUrl)
			this.startServer()
		} catch (error) {
			console.log('could not connect to db', error)
		}
	}

	startServer() {
		app.listen(PORT, () => console.log(`Server up on http://localhost:${PORT}/api/v1`))
	}
}

new Server()
