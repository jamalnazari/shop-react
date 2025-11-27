import { useContext } from "react";
import { shopcontext } from "../../context/shopcontext";

const Prudact = ({ data }) => {          
  const { cartitem, addTocart, removeFormcart } = useContext(shopcontext);

  const item = cartitem?.find((row) => row.id === data.id);
  const count = item ? item.count : 0;

  return (
   
      <div className="col-5 col-sm-3 col-md-2 text-center ">
        <div className="column justify-content-center my-2">
          <img src={data.productimg} alt={data.name} className="col-12" />
          <h5 className="fontG">{data.name}</h5>
          <p className="fontG">{data.price.toLocaleString()} تومان</p>

          <button className=" btn-add  " onClick={() => addTocart(data.id)}>+</button>

          <span className="mx-1">{count}</span>
          {count > 0 && (<button className=" btn-remov  btn-sm"onClick={() => removeFormcart(data.id)} >-</button>)}
        </div>
      </div>
    
  );
};

export default Prudact;