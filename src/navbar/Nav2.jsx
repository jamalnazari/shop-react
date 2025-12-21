import './nav.css'
import { Link } from 'react-router-dom'
import { faHome, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 

export const Navbar2 =()=>{

    return(
        <nav className='container-fluid nav-b row align-items-center text-center d-md-none '>
            
            <div className='col-3'>
               <Link>
                  <FontAwesomeIcon icon={faCircleUser}/>
               </Link>

            </div>
            <div className="home col-3">
                <Link to='/shop-react/' className="">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
            </div>
            <div className='col-3'>
               <Link>
                  <FontAwesomeIcon icon={faTableCells}/>
               </Link>

            </div>
            <div className='col-3'>
               <Link>
                  <FontAwesomeIcon icon={faShoppingCart}/>
               </Link>

            </div>
        </nav>
    )
}