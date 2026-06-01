import { createContext, useContext, useEffect, useState } from "react";

 export const Cartcontext=createContext(null)

 function Cartprovider({children}){

    const [items ,setitems]=useState([])


    useEffect(()=>{
        const i = localStorage.getItem('items')
        i?setitems(JSON.parse(i)):[]
    } , [])
    const addTocart=(product)=>{

       setitems(prev =>{
         return [...prev , product]
       })
       const bool=items.find(p => p.id ==product.id)
       if(!bool){

         localStorage.setItem('items' , JSON.stringify([...items ,product]))
       }
       
    }

    const removecart=()=>{

    }

    return (
        <Cartcontext.Provider value={{items , addTocart , removecart}}>
            {children}
        </Cartcontext.Provider>
    )
 }
 export default Cartprovider