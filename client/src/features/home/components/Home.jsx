import SliderProducts from "./slider-products";
import Boyasdasteh from "./boyasdasteh";
import BoxProducts from "./BoxProducts";
import { Homeslider } from "./homeSlider";
import { useContext } from "react"
import { Apicontext } from "../context/Apicontext"
import CircleLoading from "../../../sheared/Loading/CircleLoading";
export default function Home(){
    
    const {Products,loading1}=useContext(Apicontext)

    
    return(
        <>
            { !loading1? <div className="w-full md:mt-[300px] lg:mt-[350px] mt-[250px] bg-white   text-center pt-[20px] md:pl-[6%]">
                <Homeslider/>
                <SliderProducts data={Products}/>
                <Boyasdasteh/>
                <BoxProducts data={Products}/>
            </div> : <CircleLoading/>}
        </>
    )
}