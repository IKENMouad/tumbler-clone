import express from 'express'
import { createPostRequest, fetchPost, fetchPostsByHash, fetchPostsByTag } from '../controllers/postController'
const router = express.Router()


router.post('/create-post', createPostRequest)
router.post('/by-hash/:hashId', fetchPostsByHash)
router.post('/by-tag/:tagId', fetchPostsByTag)
router.post('/:postId', fetchPost)


export default router 