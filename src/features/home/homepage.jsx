import { Homeslider } from "./components/homeSlider";
import { Homevitreen1 } from "./components/homevitreen-a";
import { Homevitreen2 } from "./components/homevitreen-b";
import Apiprovider from "./context/Apicontext";
export const Homepage=()=>{
    
    return (
        <div  className=' shop text-end'>
            <Apiprovider>
             <Homeslider/>
             <Homevitreen1/>
             <Homevitreen2/>
            </Apiprovider>
        </div>
  );
}