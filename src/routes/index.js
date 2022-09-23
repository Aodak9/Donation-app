import { Router } from "express";
import Projects from './projects.js';

const router = Router()
router.use('/donation', Projects)

export default router