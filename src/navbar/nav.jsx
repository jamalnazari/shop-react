import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./nav.css";

const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(null); 
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggle = (name) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <header
      
      className="d-flex container-fluid nav-a align-items-center"
    >
      <div className="d-none d-md-flex row  h-100 w-100">
        <div className="col-1 h-50">
          <img src="/jamal.jpg" className="img" alt="logo" />
        </div>

        <div className="col-7 text-end serchbox pt-3 ">
          <div className="serch-icon px-2">
            <FontAwesomeIcon icon={faSearch} /> <span>جستجو</span>
          </div>
        </div>

        <div className="col-2 text-start parent-login pt-3">
          <Link to={"/register"}>
            <button className="login">ورود|ثبت‌نام</button>
          </Link>
        </div>

        <div className="col-2 text-center parent-cart pt-3">
          <Link to="/shop-react/cart" className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>

        <div ref={navRef} className="col-10 col-xl-9 d-flex justify-content-start h-25">
          {/* زیبایی */}
          <div className={`menu-item col-2 h-100  text-start ${openMenu === "beauty" ? "active" : ""}`}>
            <p className="pElem" onClick={() => toggle("beauty")}>زیبایی‌وسلامت</p>
            <ul className="d-flex flex-column dropdown mx-5">
              <li><Link to="/category/beauty">زیبایی</Link></li>
              <li><Link to="/category/fragrances">اتکلن</Link></li>
              <li><Link to="/category/skin-care">نرم‌کننده</Link></li>
            </ul>
          </div>

          {/* دیجیتال */}
          <div className={`menu-item col-2 h-100  text-start ${openMenu === "digital" ? "active" : ""}`}>
            <p className="pElem" onClick={() => toggle("digital")}>دیجیتال‌والکترونیک</p>
            <ul className="d-flex flex-column dropdown mx-5">
              <li><Link to="/category/lighting">روشنایی</Link></li>
              <li><Link to="/category/automotive">خودرویی</Link></li>
              <li><Link to="/category/motorcycle">موتور‌سیکلت</Link></li>
            </ul>
          </div>

          {/* تکنولوژی */}
          <div className={`menu-item col-2 h-100  text-start ${openMenu === "tech" ? "active" : ""}`}>
            <p className="pElem" onClick={() => toggle("tech")}>تکنولوژی‌ولوازم‌جانبی</p>
            <ul className="d-flex flex-column dropdown mx-5">
              <li><Link to="/category/laptops">لپتاپ</Link></li>
              <li><Link to="/category/smartphones">گوشی</Link></li>
              <li><Link to="/category/tablets">تبلت</Link></li>
              <li><Link to="/category/mobile-accessories">جانبی</Link></li>
            </ul>
          </div>

          {/* پوشاک */}
          <div className={`menu-item col-2 h-100  text-center ${openMenu === "fashion" ? "active" : ""}`}>
            <p className="pElem" onClick={() => toggle("fashion")}>پوشاک</p>
            <ul className="d-flex flex-column dropdown">
              <li><Link to="/category/mens-shirts">پیراهن‌مردانه</Link></li>
              <li><Link to="/category/mens-shoes">کفش مردانه</Link></li>
              <li><Link to="/category/mens-watches">ساعت مردانه</Link></li>
              <li><Link to="/category/womens-dresses">مانتو‌زنانه</Link></li>
              <li><Link to="/category/womens-shoes">کفش زنانه</Link></li>
              <li><Link to="/category/womens-watches">ساعت‌زنانه</Link></li>
              <li><Link to="/category/womens-bags">کیف‌زنانه</Link></li>
              <li><Link to="/category/tops">تاب</Link></li>
            </ul>
          </div>
          {/* خانه */}
          <div className={`menu-item col-2 h-100 ${openMenu === "home" ? "active" : ""}`}>
            <p className="pElem" onClick={() => toggle("home")}>خانه‌وزندگی</p>
            <ul className="d-flex flex-column dropdown">
              <li><Link to="/category/home-decoration">دکور</Link></li>
              <li><Link to="/category/furniture">مبلمان</Link></li>
              <li><Link to="/category/kitchen-accessories">ضروف‌آشپزی</Link></li>
              <li><Link to="/category/groceries">مواد‌غذایی</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-md-none row w-100">
        <div className="serch-icon col-12 px-2">
          <FontAwesomeIcon icon={faSearch} /> <span>جستجو</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
