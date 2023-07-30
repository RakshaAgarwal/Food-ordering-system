import "./login.scss";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function onSubmitClick(){
    if(props.action === "signup"){
    const result = await fetch('http://localhost:3005/student/signup',{
      method: 'post',
      body: JSON.stringify({name, email, password}),
      headers : {
        'Content-Type': 'application/json'
      }
    });
    if(result.status === 201)navigate('/login')
    console.log(await result.json())
  }
  else{
    const result = await fetch('http://localhost:3005/student/login',{
      method: 'post',
      body: JSON.stringify({ email, password}),
      headers : {
        'Content-Type': 'application/json'
      }
    });
    if(result.status === 201)navigate('/shops')
    console.log(await result.json())
  }
  }
  return (
    <div className="d-flex vh-100 login-page">
      <div className="login-box m-auto p-5">
        <h2 className="text-center my-5 login-heading">{props.heading}</h2>
        <form>
          { props.action === "signup" &&
             <div className="input-group mb-5">
             <input
               id="name"
               type="text"
               className="form-control"
               name="name"
               placeholder="Username"
               value={name}
               onChange={(e)=>setName(e.target.value)}
             />
           </div>
          }
         
          <div className="input-group mb-5">
           
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="d-flex mt-5 justify-content-between">
        <button type="button" className="btn btn-primary btn-lg" onClick={onSubmitClick}>Submit</button>
        { props.action === "signup" &&
           <div className="d-flex align-items-center">
             <span className="login-text">Already have an account?</span>
             <button type="button" className="btn btn-link" onClick={()=>navigate('/login')}>Login</button>
             </div>
          }
          { props.action === "login" &&
           <div className="d-flex align-items-center">
             <span className="login-text ">Don't have an account?</span>
             <button type="button" className="btn btn-link" onClick={()=>navigate('/signup')}>Register here</button>
             </div>
          }
        </div>

      </div>
    </div>
  );
}

export default Login;
