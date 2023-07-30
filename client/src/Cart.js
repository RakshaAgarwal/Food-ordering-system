import NavBar from "./NavBar";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.addToCart);
  return (
    <>
      <NavBar />
      <div className={`cart ${cartItems.length>0?'':'cart-center'}`}>
        {cartItems.length === 0 && (
          <div className="empty-cart p-5">
            <img
              src={require(`./assets/images/empty-cart.webp`)}
              alt="empty-cart"
            ></img>
            <h2>Your Cart is empty</h2>
            <p>
              You have no items in your shopping cart. Let's go buy something!
            </p>
            <button
              type="button"
              class="btn btn-danger btn-lg"
              onClick={() => navigate("/shops")}
            >
              Shop Now
            </button>
          </div>
        )}
        {cartItems.length>0 && (
            <div>
            {cartItems.map((dataObj, index) => {
                return (
                <div className="card mx-5" style={{ width: "18rem" }} key={index}>
                <img
                  src={require(`./assets/images/${dataObj.Image}.png`)}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p>{dataObj.ItemName}</p>
                  <div className="d-flex justify-content-between">
                    <p>Rs <span>{dataObj.ItemPrice}</span></p>
                    <div>
                    {dataObj.rating}
                      <img
                        width="10"
                        height="10"
                        alt="star"
                        src={require(`./assets/images/star.png`)}
                      ></img>
                    </div>
                  </div>
                  <p className="card-text">
                  {dataObj.description}
                  </p>
                </div>
              </div>
                  
                );
              })}</div>
        )}
      </div>
    </>
  );
}
export default Cart;
