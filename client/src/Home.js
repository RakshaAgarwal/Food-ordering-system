import "./login.css";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    function onClick(route){
        navigate(route)
    }
  return (
    <>
    <div className="d-flex bg-info">
      <h1>Already have an Account ? </h1>
      <button type="button" className="btn btn-info" onClick={() => onClick("/login")}>Login</button>
    </div>
    <h3> Or </h3>
    <button type="button" className="btn btn-info" onClick={() => onClick("/signup")}>Signup</button>
    </>
  );
}

export default Home;
