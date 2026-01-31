import axios from "axios";
import { useState,  createContext, useEffect } from "react";

export const Apicontext = createContext(null);


const Apiprovider = ({ children }) => {
  const [res1, setres1] = useState([]);
  const [res2, setres2] = useState([]);
  const [res3, setres3] = useState([]);
  const [loading1 , setloading1]=useState(true)
  const [loading2 , setloading2]=useState(true)
  const [loading3 , setloading3]=useState(true)
 useEffect(()=>{
    const asynres = async () => {
      
      try{
        const promise= axios.get('/api/products/category/groceries')
        const promise2=axios.get('/api/products/category/mens-watches')
        const promise3=axios.get('/api/products/category/womens-watches')

        const resp1= await promise
        const resp2= await promise2
        const resp3= await promise3

        console.log(resp1);
        console.log(resp2);
        console.log(resp3);

        setres1(resp1.data.products)
        setres2(resp2.data.products)
        setres3(resp3.data.products)

        if(res1){
          setloading1(false)
        }
        if(res2){
           setloading2(false)
        }
        if(res3){
           setloading3(false)
        }
        
      }
      catch(e){
        console.log(e);
        
      }
    }
      asynres();
 } , [])
    

  

  return (
    <Apicontext.Provider value={{ res1,res2,res3,loading1,loading2,loading3 }}>
      {children}
    </Apicontext.Provider>
  );
};

export default Apiprovider;