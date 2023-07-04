import React ,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   function HandleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function HandlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function HandleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlesubmit(e) {
  e.preventDefault();
  fetch("/user/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      email,
      password
    })
  }).then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data)
      if(data.error){
      alert(data.error);
      }
      else{
        console.log(data)
      props.setUser({name:data.username,email:data.email,loggedIn:true});
      navigate('/profile');
      }
    })
  
  }
  useEffect(() => {
   if(props.user.loggedIn){
      navigate('/profile');
    }
})
  return (
    <div className="mt-3">
     <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" onChange={HandleUsernameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" onChange={HandleEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password"  onChange={HandlePasswordChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-3"  onClick={handlesubmit} >Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
