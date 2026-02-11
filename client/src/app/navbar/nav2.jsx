import './nav.css'
import { Link } from 'react-router-dom'
import { faHome, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 

export const Navbar2 =()=>{

    return(
      <div className='container-fluid nav-b  d-md-none'>
         <div className='row nav-b-child'>   
            <div className='col-3'>
               <div className='parent-icon bg-user'>
               <Link>
                  <FontAwesomeIcon icon={faCircleUser}/>
               </Link>
                </div>
            </div>
            <div className="home col-3">
               <div className='parent-icon bg-home'>
                <Link to='/shop-react' className="">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
               </div>
            </div>                
            <div className='col-3'>
               <div className='parent-icon bg-dasteh'>
               <Link to='/Dastehha'>
                  <FontAwesomeIcon icon={faTableCells}/>
               </Link>
                </div>
            </div>
            <div className='col-3'>
               <div className='parent-icon bg-cart'>
               <Link to={'/shop-react/cart'}>
                  <FontAwesomeIcon icon={faShoppingCart}/>
               </Link>
                </div>
            </div>
         </div>
      </div>
    )
}