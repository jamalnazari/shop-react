
import Home from "../components/Home";
import Apiprovider from "../context/Apicontext";
export const Homepage=()=>{

    
    
    return (
        <div  className=''>
            <Apiprovider>
               <Home/>
            </Apiprovider>
        </div>
  );
}