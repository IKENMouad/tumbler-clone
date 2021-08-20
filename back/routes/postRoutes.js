import express from 'express'
import { createPostRequest, fetchPost, fetchPostsByHash, fetchPostsByTag, } from '../controllers/postController.js'
const router = express.Router()


router.post('/create-post', createPostRequest)
router.get('/by-hash/:hashId', fetchPostsByHash)
router.get('/by-tag/:tagId', fetchPostsByTag)
router.get('/:postId', fetchPost)


export default router 