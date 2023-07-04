const {userModel,postModel} = require("../model/schema");

const shortid=require('shortid')
async function createPost(req,res){
    const {title,description,username}=req.body;
    console.log(req.body)
    const user=await userModel.findOne({username:username})
    if(!user){return res.send({error:'User not found'})}
    const post=await postModel.create({title,description,username:user.username,creationDate:new Date(),slug:title+" "+shortid.generate()})
    res.send({message:'Post created successfully'})
}
async function getpost(req,res){
    const {username}=req.body;
    const posts=await postModel.find({username:username})
    if(!posts){return res.send({error:'No posts found'})}
    console.log(posts,username)
    res.send({message:'Posts found',posts:posts})
}
module.exports={
    createPost,
    getpost
}