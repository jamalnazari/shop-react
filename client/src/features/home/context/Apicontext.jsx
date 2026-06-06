import axios from "axios";
import { useState,  createContext, useEffect } from "react";
import { productService } from "../../../api/productService";
import { data } from "react-router-dom";
export const Apicontext = createContext(null);


const Apiprovider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [loading1 , setloading1]=useState(true)
  const [error , seterror]=useState("")
 useEffect(()=>{
    const asynres = () => {
        productService.getAll()  
        .then(data =>{
          setProducts(data) 
          console.log(data)
          if(Products){
          setloading1(false)
        }
        
      }).catch(e =>{
         console.log("THIS ERROR IS IN THE APICONTEXT");
         setloading1(false)
         seterror("مشکل در اتصال به اینترنت")
         
      })
        
        
 
        
        
        
        
      
    }
      asynres();
 } , [])
    

  

  return (
    <Apicontext.Provider value={{ Products,loading1,error }}>
      {children}
    </Apicontext.Provider>
  );
};

export default Apiprovider;