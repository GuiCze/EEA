import express from "express"
import agendamento from "../controllers/agendamento-controller.js"
import check_token from "../middlewares/check-token.js"
import check_role from "../middlewares/check-role.js"
const router = express.Router()

router.get('/', check_token, agendamento.index)
router.get('/:id',check_token, agendamento.show)
router.get('/agenda/:id',check_token, agendamento.meu_agendamento)
router.post('/',check_token,check_role(["ADM","REC"]), agendamento.store)
router.put('/:id',check_token, check_role(["ADM","REC"]), agendamento.update)
router.delete('/:id',check_token, check_role(["ADM","REC"]), agendamento.destroy)

export default router