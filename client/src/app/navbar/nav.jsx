import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";

const Navbar = () => {

  return (
    <header className="d-flex container-fluid nav-a align-items-center">
      <div className="d-none d-md-flex row justify-content-end  h-100 w-100">
        <div className="col-8 h-50">
          <img src="/shop-react/jamal.jpg" className="img" alt="logo" />
        </div>

        <div className="col-1 pt-3 ">
          <div className="serch-icon px-2 ">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        <div className="col-2 text-center parent-login pt-3">
          <Link to={"/shop-react/sinup"}>
            <button className="login">ورود|ثبت‌نام</button>
          </Link>
        </div>

        <div className="col-1 text-end parent-cart pt-3">
          <Link to="/shop-react/cart" className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </div>

      <div className="d-md-none row w-100">
        <div className="serch-icon col-12 px-2">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
