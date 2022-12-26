import CohortController from "../controlllers/cohort.controller.js"
import { router } from "../helpers/instances/router.js"
import { authenticateJwt } from "../helpers/jwt.js"

const cohort = new CohortController()

router.get("/all", cohort.getAllCohorts)
router.get("/:id", cohort.getSingleCohort)
router.post("/create", authenticateJwt, cohort.createCohort)
router.patch("/:id/edit", authenticateJwt, cohort.editCohort)
router.delete("/:id/delete", authenticateJwt, cohort.deleteCohort)

export default router