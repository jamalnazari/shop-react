
import Home from "../components/Home";
import { Apicontext } from "../context/Apicontext";
import { useContext } from "react";
import AsyncState from "../../../shared/AsyncState";
export const Homepage=()=>{

    const {loading1,error}=useContext(Apicontext)
    
    
    return (
        <div  className=''>
            
              {AsyncState({loading:loading1 , error:error ,children:<Home/> })} 
            
        </div>
  );
}