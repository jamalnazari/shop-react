import Prudact from "./prudact.jsx";
import { PRODUCTS } from "../../data/products.jsx";

const Shop = () => {
  return (
    <div className=" container shop d-flex justify-content-around">
      <div className="column d-flex justify-content-around flex-wrap shop-child">
        {PRODUCTS.map((prudactdata) => (
          <Prudact key={prudactdata.id} data={prudactdata} />
        ))}
      </div>
      
    </div>
  );
};

export default Shop;