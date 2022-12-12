import { login, register, resetPassword } from '../controlllers/auth.controller.js'
import { router } from '../helpers/instances/router.js'

router.post("/register", register)
router.post("/login", login)
router.post("/reset-password", resetPassword)


export default router