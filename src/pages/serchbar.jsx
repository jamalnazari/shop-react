import { useState } from "react";
import { PRODUCTS } from "../data/products";
import Prudact from "./shop/prudact";

export const Serch=()=>{

    const [pr , setpr]=useState([])
 
    return(
        <div className="serch row justify-content-around">
            
            <input className="inpserch" placeholder="جستجو"  onChange={(e)=>{

                if(e.target.value.trim()==="") {
                    setpr([])
                    return
                }
                
                setpr(PRODUCTS.filter(ap=>(ap.name.includes(e.target.value?e.target.value : []))))
                
            }} />
            
            <div className="mt-5 row justify-content-center">

                {pr.map((prod)=>{
                    
                    return(
                        <Prudact key={prod.id} data={prod}/>
                    )
                    
                   }
                )}
            </div>
            {console.log(pr) }
            
        </div>
    )
}