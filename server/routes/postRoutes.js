const express = require('express');
const router = express.Router();
const {login,register}=require('../controller/auth')
const {getpost,createPost}=require('../controller/post')

router.post('/login',login)
router.post('/register',register)

router.post('/getposts',getpost)
router.post('/createpost',createPost)
module.exports = router