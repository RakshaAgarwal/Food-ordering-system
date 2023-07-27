import "./login.css";
import { useState } from 'react'
function Login(props) {
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
    console.log(await result.json())
  }
  }
  return (
    <div className="d-flex vh-100 bg-info">
      <div className="login-box m-auto p-5">
        <h2 className="text-center mb-4">{props.heading}</h2>
        <form>
          { props.action === "signup" &&
             <div className="input-group mb-5">
             <span className="input-group-addon">
               <i className="glyphicon glyphicon-user"></i>
             </span>
             <input
               id="name"
               type="text"
               className="form-control"
               name="name"
               placeholder="Name"
               value={name}
               onChange={(e)=>setName(e.target.value)}
             />
           </div>
          }
         
          <div className="input-group mb-5">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user"></i>
            </span>
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
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock"></i>
            </span>
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
        <button type="button" className="btn btn-info" onClick={onSubmitClick}>Submit</button>
        {/* <button type="button" className="btn btn-info" onClick={onSignUpClick}>Sign Up</button>
        <button type="button" className="btn btn-info">Login</button> */}
        </div>

      </div>
    </div>
    // <>
    //   <h1>Who lives in my Garage?</h1>
    //   <button type="button" className="btn btn-primary">Base className</button>
    // </>
  );
}

export default Login;
