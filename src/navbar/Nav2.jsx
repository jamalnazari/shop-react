import './nav.css'
import { Link } from 'react-router-dom'
import { faHome, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 

export const Navbar2 =()=>{

    return(
        <nav className='container-fluid nav-b d-flex row align-items-center text-center d-md-none '>
            
            <div className='col-3'>
               <Link>
                  <FontAwesomeIcon icon={faCircleUser}/>
                  <p className='fontG'>حساب کاربری</p>
               </Link>

            </div>
            <div className="home col-3">
                <Link to='/' className="">
                  <FontAwesomeIcon icon={faHome}/>
                  <p className='fontG'>خانه</p>
                </Link>
            </div>
            <div className='col-3'>
               <Link to='/Dastehha'>
                  <FontAwesomeIcon icon={faTableCells}/>
                  <p className='fontG'>دسته‌بندی‌ها</p>
               </Link>

            </div>
            <div className='col-3'>
               <Link>
                  <FontAwesomeIcon icon={faShoppingCart}/>
                  <p className='fontG'>سبد خرید</p>
               </Link>

            </div>
        </nav>
    )
}