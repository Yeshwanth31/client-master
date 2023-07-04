import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
export default function Createpost(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate();
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { title, description,username:props.user.name }
    // console.log(post)
        fetch('/user/createpost', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        }).then(res=>res.json()).then(
            data=>{
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert('Post created successfully')
                    console.log(data)
                    navigate('/profile')
                }
            }
        )
    }
    useEffect(() => {
        if(!props.user.loggedIn){
          navigate('/login');
        }
    })
  return (
    <div class="center-box w-25 m-auto mt-5">
    <div class="form-box border p-3">
      <h2 class="text-center">Create Post</h2>
      <form>
        <div class="form-group ">
          <label for="title">Title:</label>
          <input type="text" class="form-control" id="title" placeholder="Enter title" onChange={handleTitleChange}/>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control " style={{height:'250px'}} id="description" onChange={handleDescriptionChange} placeholder="Enter description"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-3 w-25 m-auto " onClick={handleSubmit}>Create</button>
      </form>
    </div>
  </div>
  )
}
