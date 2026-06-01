
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Cartcontext } from "../../cart/context/cartcontext"
import { useContext } from "react"
  const ProductDetailPage=()=>{

    const {addTocart}=useContext(Cartcontext)
    const {id}=useParams()
    const [product ,setproduct]=useState({})
    useEffect(()=>{
      const getproduct=async ()=>{
         try{
             const res= await axios.get(`http://localhost:3001/products/${id}`)
             
             setproduct(res.data)
             
             
             
         }catch(err){
          console.log(err);
          
         }
      }
      getproduct()
    } , [id])
    return (
      <div className="mt-[70px] lg:mt-[100px] h-[700px] grid grid-rows-[60px_150px_150px] grid-cols-[40%_60%] bg-white">
        <p className="flex items-center justify-center ">{product.name}</p>
        <div className="p-[10%] max-h-[100%] max-w-[500px] row-span-3 lg:rows-span-4  w-[100%] md:w-[100%]">
          <img className=" " src={`${product.image}`} alt="" />
        </div>
        <p className="flex items-center justify-center ">تومان {product.price}</p>
        <p className="flex items-center justify-center ">{product.description}</p>
        <div className="flex items-center justify-center ">
          <button onClick={ ()=> addTocart(product)} className="border p-3 rounded bg-red-500 text-white">افزودن به سبد خرید</button>
        </div>
      </div>
    )
}

export default ProductDetailPage