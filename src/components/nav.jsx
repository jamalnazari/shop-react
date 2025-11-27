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
    <div className="container ">
      <header className=" row justify-content-around hed ">
        <div className="col-6 col-sm-4">
          <div className="row justify-content-around">
             <div className="col-4 my-3 text-end">
                <Link to='/cart' className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart}/>
                  {itemcount > 0 && <span className="cart-items-count">{itemcount}</span>}
                </Link>
            </div>
            <div className="col-4 my-3 text-start">
                <Link to='/' className="nav-link">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 my-3">
          <div className="row">
            <div className="col-6 ">
              
              <Link to={'/serch'} className="serch-link">
                 <FontAwesomeIcon  icon={faSearch}/>
              </Link>
               
            </div>
            <div className="col-4 text-start">
                <Link to={'/login'} className="login">login</Link>
            </div>
          </div>
               
        </div>
      </header>
    </div>
  )
 }
export default Navbar 


  