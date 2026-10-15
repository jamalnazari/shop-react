import SliderProducts from "./slider-products";
import Boyasdasteh from "./boyasdasteh";
import BoxProducts from "./BoxProducts";
import { Homeslider } from "./homeSlider";
import { useProducts } from "../../../context/ProductsContext";
import AsyncState from "../../../shared/AsyncState";

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <div className="w-full pt-[100px] lg:pt-[110px] bg-white text-center md:pl-[6%]">
      <Homeslider />
      {AsyncState({
        loading,
        error,
        children: (
          <>
            <SliderProducts data={products} />
            <Boyasdasteh />
            <BoxProducts data={products} />
          </>
        ),
      })}
    </div>
  );
}
