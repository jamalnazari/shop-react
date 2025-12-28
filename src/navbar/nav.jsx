import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 
import { useContext } from "react"
import { shopcontext } from "../context/shopcontext"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './nav.css'
const Navbar =()=>{
  const {cartitem}=useContext(shopcontext)
  const itemcount=cartitem?.reduce((prev , current)=>{
    return prev + current.count
  }, 0)
  return (

    <header className=" d-flex  container-fluid nav-a align-items-center border-start border-end rounded border-3 border-dark">
          <div className="d-none d-md-flex flex-wrap h-100 w-100">
             <div className="col-1 h-50">
              <img src="/jamal.jpg" className="img"></img>
             </div>
             
            <div className="col-7 text-end serchbox pt-3 ">
              <div className="serch-icon">
                 <FontAwesomeIcon  icon={faSearch}/>    <span>جستجو      </span>
              </div>
            </div>

            <div className="col-2 text-start parent-login pt-3">
                <Link to={'/login'} >
                <button className="login fontG">ورود|ثبت‌نام</button>
                </Link>
            </div>

            <div className="col-2 text-center parent-cart pt-3">
                <Link to='/shop-react/cart' className="cart">
                  {itemcount > 0 && <span className="count">{itemcount}</span>}
                  <FontAwesomeIcon icon={faShoppingCart}/>
                </Link>
            </div>
            <div className="col-12 d-flex  justify-content-center h-25">
              <div className="col-1 h-100 fontG">
                <p >آرایش</p>
              </div>
              <div className="col-1 h-100 fontG">
                <p >آرایش</p>
              </div>
              <div className="col-1 h-100 fontG">
                <p >آرایش</p>
              </div>
              <div className="col-1 h-100 fontG">
                <p >آرایش</p>
              </div>
              <div className="col-1 h-100 fontG">
                <p >آرایش</p>
              </div>
            </div>
          </div>
          <div className="d-md-none col-12 text-end serchbox ">
              <div className="serch-icon">
                 <FontAwesomeIcon  icon={faSearch}/>    <span>جستجو      </span>
              </div>
          </div>
    </header>

  )
 }
export default Navbar 


  