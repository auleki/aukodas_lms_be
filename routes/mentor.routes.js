import MentorController from "../controlllers/mentor.controller.js";
import { router } from "../helpers/instances/router.js"

const mentor = new MentorController()

router.get("/:id", mentor.getAllMentors)
router.get("/all", mentor.getSingleMentor)
router.patch("/:id/edit", mentor.editMentor)
router.get("/:id", mentor.getSingleMentor)
router.get("/:id/delete", mentor.deleteMentor)

export default router