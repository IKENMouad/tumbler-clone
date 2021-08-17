import express from 'express'
import { attachHashs } from '../controllers/hashController'
const router = express.Router()


router.post('/attach-hashs', attachHashs )


export default router  