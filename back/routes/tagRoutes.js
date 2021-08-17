import express from 'express'
import { createTag } from '../controllers/tagController'
const router = express.Router()


router.post('createTags',  createTag  )


export default router 