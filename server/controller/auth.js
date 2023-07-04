const bcrypt = require('bcryptjs');
const { userModel,postModel }=require('../model/schema');
const shortid=require('shortid')
async function getUser(username,email) {
    const user=await userModel.findOne({$or:[{username:username},{email:email}]})
    return user;
}
async function create(username, password,email) {
    const user = await userModel.create({ username, password,email });
    return user;
}


async function login(req, res) {
    const { username, password } = req.body;
    const user1 = await getUser(username,null);
    console.log(user1,req.body)
    if (!user1) {  return res.send({error:'User Not Found'}) }
    const isMatch = await bcrypt.compare(password, user1.password);
    if (!isMatch) { return res.send({error:'either username or password is incorrect'}) }
    console.log(user1.name)
    res.send({message:'User logged in successfully',username:user1.username,email:user1.email})

}
async function register(req, res) {
    const { username, password,email } = req.body;
    console.log(username,password,email)
    if(!username||!password||!email){return res.send({error:'Please enter all the fields'})}
    const user = await getUser(username,email);
    if (user) { return res.send({error:'User already exists'}) }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newuser = await create(username, hash,email);

    res.send({message:'User created successfully',username:newuser.username,email:newuser.email})
}


module.exports = {
    login,
    register
     }