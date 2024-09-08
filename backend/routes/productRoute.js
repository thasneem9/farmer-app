import express from 'express'



const router=express.Router();

router.get("/getFeed")
router.get("/getMyPosts")
router.post("/createPost")


export default router;