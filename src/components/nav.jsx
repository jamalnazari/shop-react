import { Link } from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 
import { useContext } from "react"
import { shopcontext } from "../context/shopcontext"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import './nav.css'
const Navbar =()=>{
  const {cartitem}=useContext(shopcontext)
  const itemcount=cartitem?.reduce((prev , current)=>{
    return prev + current.count
  }, 0)
  return (

    <header className="container-fluid nav-a d-flex align-items-center">
          
             <div className="col-1">
              <img src="/jamal.jpg" className="img"></img>
             </div>
             
            <div className="home ">
                <Link to='/shop-react/' className="">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
            </div>
        
            <div className="col-7 text-end serchbox ">
              <div className="serch-icon">
                 <FontAwesomeIcon  icon={faSearch}/>    <span>جستجو      </span>
              </div>
            </div>
            <div className="col-2 text-start ">
                <Link to={'/login'} className="login fontG">ورود | ثبتنام</Link>
            </div>
            <div className="col-2 text-center">
                <Link to='/shop-react/cart' className="cart">
                  {itemcount > 0 && <span className="count">{itemcount}</span>}
                  <FontAwesomeIcon icon={faShoppingCart}/>
                </Link>
            </div>
          
    </header>
  )
 }
export default Navbar 


  