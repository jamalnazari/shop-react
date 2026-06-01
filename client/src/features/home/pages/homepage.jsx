
import Home from "../components/Home";
import Apiprovider from "../context/Apicontext";
import { useContext } from "react";
import { Cartcontext } from "../../cart/context/cartcontext";
export const Homepage=()=>{


    const {items}=useContext(Cartcontext)
    console.log(items);
    
    return (
        <div  className=''>
            <Apiprovider>
               <Home/>
            </Apiprovider>
        </div>
  );
}