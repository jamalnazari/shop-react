
import { useContext } from "react"
import { shopcontext } from "../context/shopcontext"
import Prudact from "./prudact"

 const Cart =()=>{
   const {cartitem , resetitems,int,products} =useContext(shopcontext)
 return(
  <div className="container pt-5">
    <div className="row justify-content-center ">
      {products.map((p)=>{
        if(cartitem?.some((i)=> i.id===p.id && i.count >0 ))
         return <Prudact key={p.id} data={p}></Prudact>
      })}
    </div>
    <div className="container">
      <div className="col-8">
        {int?<div className="int">{int.toLocaleString()}$ <button className="btnbg">پرداخت</button></div> :<p className="btnbg">سبد خرید شما خالیست</p> }
      </div>
         <button className="btn btnbg btn-warnning m-3" onClick={()=>resetitems()}>reset</button>
      
    </div>
  </div>
 )
}
export default Cart