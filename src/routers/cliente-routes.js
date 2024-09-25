import express from "express"
import cliente from "../controllers/cliente-controller.js"
import check_token from "../middlewares/check-token.js";
import check_role from "../middlewares/check-role.js";
import cep from "../middlewares/cep_endereco.js";
const router = express.Router()

router.get('/', check_token,check_role(["ADM","REC" ,"TOSA"]), cliente.index)
router.get('/:id', check_token, check_role(["ADM","REC" ,"TOSA"]), cliente.show)
router.post('/', check_token, check_role(["ADM","REC"]), cep, cliente.store)
router.put('/:id', check_token, check_role(["ADM", "REC"]), cep, cliente.update)
router.delete('/:id', check_token, check_role(["ADM", "REC"]), cliente.destroy)

export default router