import './nav.css'
import { Link } from 'react-router-dom'
import { faHome, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTableCells } from '@fortawesome/free-solid-svg-icons/faTableCells';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons' //برای استفاده در آیکون سبد خرید 

export const Navbar2 =()=>{

    return(
   
         <div className='w-full bg-slate-100 max-lg:flex  hidden fixed bottom-0 text-slate-600'>
            <div className='w-[25%] text-center my-2 text-2xl'>
               <Link to={"/shop-react/login"}>
                  <FontAwesomeIcon icon={faCircleUser}/>
               </Link>
            </div>            
            <div className='w-[25%] text-center my-2 text-2xl'>
               <Link to='/Dastehha'>
                  <FontAwesomeIcon icon={faTableCells}/>
               </Link>
            </div>
            <div className='w-[25%] text-center my-2 text-2xl'>
               <Link to={'/shop-react/cart'}>
                  <FontAwesomeIcon icon={faShoppingCart}/>
               </Link>
            </div>
            <div className='w-[25%] text-center my-2 text-2xl'>
                <Link to='/shop-react' className="">
                  <FontAwesomeIcon icon={faHome}/>
                </Link>
            </div>
         </div>
    )
}