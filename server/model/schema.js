const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
   
  },
  creationDate: {
    type: Date,
    required: true,
  },
  slug:{
    type:String,
    required:true,
    unique:true
  }
});
const userModel = mongoose.model("user", userSchema);
const postModel = mongoose.model("post", postSchema);
module.exports = {
  userModel,
  postModel,
};
