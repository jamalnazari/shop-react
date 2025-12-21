import { useContext } from "react";
import { shopcontext } from "../context/shopcontext";

const Prudact = ({ data }) => {          
  const { cartitem, addTocart, removeFormcart } = useContext(shopcontext);
  
  const item = cartitem?.find((row) => row.id === data.id);
  const count = item ? item.count : 0;

  return (
   
      <div className="col-4 col-sm-3 col-lg-2  prudoct ">
        
          <img src={data.thumbnail} alt={data.title} className="col-12 product-img " />
          <h5 className="fontG">{data.title}</h5>
          <p className="fontG">{data.price.toLocaleString()}$</p>
      </div>
    
  );
};

export default Prudact;