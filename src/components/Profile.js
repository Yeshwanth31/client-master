import React, { useEffect ,useState} from 'react'
import {useNavigate} from 'react-router-dom';
const ProfilePage = (props) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    function handleLogout() {
      props.setUser({ name: "", email: "", loggedIn: false });
      navigate('/login');
    }
    useEffect(() => {
        if(!props.user.loggedIn){
             navigate('/login');
         }
            fetch("/user/getposts",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username:props.user.name})

            }).then(res=>res.json()).then(data=>{
                if(data.error)
                    return alert(data.error);
                else{
                    console.log(data)
                    setPosts(data.posts);
                }
            })


            },[!posts])
    
    return (
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-header">
                <h3>Profile</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Name:</label>
                  <p>{props.user.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <p>{props.user.email}</p>
                </div>
                {/* <div className="mb-3">
                  <label className="form-label">Bio:</label>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Location:</label>
                  <p>City, Country</p>
                </div> */}
                

                <div className="mt-4">
        <h3>Posts</h3>
        <ul className="list-group">
          {posts.map((post,idx) => (
            <li key={idx} className="list-group-item mt-2" >
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{post.title}</h5>
                  <p>{post.description.substring(0, 50)}...</p>
                </div>
                <div>{post.creationDate}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>


                <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;