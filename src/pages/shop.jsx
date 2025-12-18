import Prudact from "./prudact.jsx";
import { useContext } from "react";
import { shopcontext } from "../context/shopcontext.jsx";
import '../styls/prudact.css'


const Shop = () => {
  const {products}=useContext(shopcontext)
  
  return (
            <div className="prant-slide">
              <button className="nav left" >‹</button>
              <div className="  slider">
                  {products.map((prudactdata) => (
                    <Prudact key={prudactdata.id} data={prudactdata} />
                  ))}
              </div>
              <button className="nav right">›</button>
            </div>
  );
};

export default Shop;