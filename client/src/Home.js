import "./login.scss";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    function onClick(route){
        navigate(route)
    }
  return (
    <div className="home-page position-relative">
       <div className="position-absolute home-page__heading">
           <p className="home-page__text">FOOD</p>
           <p className="home-page__text">ONLINE</p>
           <button type="button" className="btn btn-outline-light btn-lg home-page__button" onClick={()=>onClick('/signup')}>Order Now</button>
       </div>
     
    </div>
    
    // <>
    // <div className="d-flex bg-info">
    //   <h1>Already have an Account ? </h1>
    //   <button type="button" className="btn btn-info" onClick={() => onClick("/login")}>Login</button>
    // </div>
    // <h3> Or </h3>
    // <button type="button" className="btn btn-info" onClick={() => onClick("/signup")}>Signup</button>
    // </>
  );
}

export default Home;
