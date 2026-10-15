import SliderProducts from "./slider-products";
import Boyasdasteh from "./boyasdasteh";
import BoxProducts from "./BoxProducts";
import { Homeslider } from "./homeSlider";
import { useProducts } from "../../../context/ProductsContext";
import AsyncState from "../../../shared/AsyncState";
import Input from "../../../shared/components/input";
export default function Home() {

  const { products, loading, error } = useProducts();

     const handlesave=()=>{
 
     console.log('ذخیره شد');
   }
     
  return (
    <div className="w-full md:mt-[300px] lg:mt-[350px] mt-[250px] bg-white   text-center pt-[20px] md:pl-[6%]">
      <Homeslider />
      {AsyncState({ loading, error, children: <>
        <SliderProducts data={products} />
        <Boyasdasteh />
        <BoxProducts data={products} />
      </> })}
    </div>
  );
}