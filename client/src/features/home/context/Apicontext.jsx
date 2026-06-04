import axios from "axios";
import { useState,  createContext, useEffect } from "react";
import { productService } from "../../../api/productService";
import { data } from "react-router-dom";
export const Apicontext = createContext(null);


const Apiprovider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [loading1 , setloading1]=useState(true)
 useEffect(()=>{
    const asynres = () => {
      
      try{
        productService.getAll()  
        .then(data =>setProducts(data))
        
 
        if(Products){
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
    <Apicontext.Provider value={{ Products,loading1 }}>
      {children}
    </Apicontext.Provider>
  );
};

export default Apiprovider;