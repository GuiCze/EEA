import express from "express"
import user from "../controllers/user-controller.js"
import check_token from "../middlewares/check-token.js";
import check_role from "../middlewares/check-role.js";
import cep from "../middlewares/cep_endereco.js";
const router = express.Router()

router.get('/', check_token, user.index)
router.get('/:id', check_token, user.show)
router.post('/', check_token, check_role(["ADM"]), cep, user.store)
router.put('/:id', check_token, check_role(["ADM"]), cep, user.update)
router.delete('/:id', check_token, check_role(["ADM"]), user.destroy)

router.post('/login', user.login)
router.post('/register', cep, user.register)

export default router