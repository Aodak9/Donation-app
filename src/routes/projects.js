import { Router } from "express";
import { getProject , postProject, putProject, deleteProject} from "../controllers/projects.js";

const router = Router()

router.get('/:id', getProject)
router.post('/', postProject)
router.put('/:id', putProject)
router.delete('/:id', deleteProject)

export default router