import axios from "axios";
import { useState,  createContext, useEffect } from "react";

export const Apicontext = createContext(null);


const Apiprovider = ({ children }) => {
  const [res1, setres1] = useState([]);
  const [loading1 , setloading1]=useState(true)
 useEffect(()=>{
    const asynres = async () => {
      
      try{
        const promise= axios.get('http://localhost:3001/products')  


        const resp1= await promise


        console.log(resp1);


        setres1(resp1.data)
 
        if(res1){
          setloading1(false)
        }
        
      }
      catch(e){
        console.log(e);
        
      }
    }
      asynres();
 } , [])
    

  

  return (
    <Apicontext.Provider value={{ res1,loading1 }}>
      {children}
    </Apicontext.Provider>
  );
};

export default Apiprovider;