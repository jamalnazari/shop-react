import { useContext } from "react";
import { shopcontext } from "../context/shopcontext";

const Prudact = ({ data }) => {          
  const { cartitem, addTocart, removeFormcart } = useContext(shopcontext);

  const item = cartitem?.find((row) => row.id === data.id);
  const count = item ? item.count : 0;

  return (
   
      <div className="col-3 col-sm-3  prudoct ">
        <div className="column justify-content-center my-5">
          <img src={data.thumbnail} alt={data.title} className="col-12" />
          <h5 className="fontG">{data.title}</h5>
          <p className="fontG">{data.price.toLocaleString()}$</p>
        </div>
      </div>
    
  );
};

export default Prudact;