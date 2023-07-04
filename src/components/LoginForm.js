import React ,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function HandleUsernameChange(e) {
    setUsername(e.target.value);
  }
  function HandlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handlesubmit(e) {
  e.preventDefault();
  fetch("/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      password
    })
  }).then(res=>res.json()).then(data=>{
    console.log(data);
    if(data.error){
      alert(data.error);
    }
    else{
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
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password"  onChange={HandlePasswordChange}/>
            </div>
            <button type="submit" className="btn btn-primary mt-3" onClick={handlesubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
