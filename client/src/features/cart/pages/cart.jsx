
import { Cartcontext } from "../context/cartcontext";
import { useContext } from "react";
const Cart = () => {
  const {items}=useContext(Cartcontext)

  console.log("this is productscart" , items);

  return(
    <div className="h-screen flex">
         {items.map(product =>{
           <div className="w-full">
              
           </div>
         })}
    </div>
  )
  
};

export default Cart;