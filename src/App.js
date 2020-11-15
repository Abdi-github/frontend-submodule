import "./index.css";

import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import CartPage from "./components/pages/CartPage";
import { useDispatch, useSelector } from "react-redux";
import RegisterPage from "./components/pages/RegisterPage";

import SigninPage from "./components/pages/SigninPage";
import { signout } from "./actions/userActions";
import ShippingAddressPage from "./components/pages/ShippingAddressPage";
import PaymentMethodPage from "./components/pages/PaymentMethodPage";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import OrderDetailsPage from "./components/pages/OrderDetailsPage";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              myShop
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {/* <Link to="/signin">Sign In</Link> */}
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />

          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SigninPage} />
          <Route path="/shipping" component={ShippingAddressPage} />
          <Route path="/payment" component={PaymentMethodPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={OrderDetailsPage} />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
