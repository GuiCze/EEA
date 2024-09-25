import express from "express"
import animal from "../controllers/animal-controller.js"
import check_token from "../middlewares/check-token.js"
import check_role from "../middlewares/check-role.js";
const router = express.Router()

router.get('/', check_token, animal.index)
router.get('/:id',check_token, animal.show)
router.post('/',check_token,check_role(["ADM","REC"]), animal.store)
router.put('/:id',check_token, check_role(["ADM", "REC"]), animal.update)
router.delete('/:id',check_token, check_role(["ADM","REC"]), animal.destroy)

export default router