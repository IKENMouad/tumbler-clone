import express from 'express'
import { login, register } from '../controllers/authContoller'
const router = express.Router()


router.post('/login' , login )
router.post('/register' , register )


export default router