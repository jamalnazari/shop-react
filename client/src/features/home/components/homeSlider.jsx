import { useContext, useEffect, useRef, useState } from "react";
import Prudact from "../../products/components/prudact";
import { Apicontext } from "../context/Apicontext";
import Loade from "../../../sheared/Loading/CircleLoading";
export const Homeslider=()=>{
  const imgs=[
    'slide-1.png',
    'slide-2.png',
    'slide-3.png',
    'slide-4.png',
    'slide-5.png',
    'slide-6.png',
  ]
  const [count , setCount]=useState(0)

  useEffect(()=>{

    const interval=  setInterval(() => {
        setCount(prevcount=>{
          if(prevcount==5){
            return 0
          }else{
            return prevcount+1
          }
        })
      },  3000);

      
      return ()=> clearInterval(interval)
  } , [count])

    return(
        <sup className="mt-[110px] z-[-1] fixed  w-full overflow-x-auto left-[0%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <img src={`${imgs[count]}`} className=" image-slide " alt="" />
        </sup>
    )
}