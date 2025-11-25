import { useState } from "react";
import { PRODUCTS } from "../data/products";
import Prudact from "./shop/prudact";

export const Serch=()=>{

    const [product , setproduct]=useState("")
    const [pr , setpr]=useState(PRODUCTS)
 
    return(
        <div className="serch">
            <input value={product} onChange={(e)=>{
                setproduct(e.target.value)
                setpr(PRODUCTS.filter(ap=>(ap.name.includes(e.target.value))))
            }} />
            
            <div>
                {pr.map((prod)=>{
                    
                    return(
                        <Prudact key={prod.id} data={prod}/>
                    )
                    
                   }
                )}
            </div>
        </div>
    )
}