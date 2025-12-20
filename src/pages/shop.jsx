import Prudact from "./prudact.jsx";
import { useContext,useRef } from "react";
import { shopcontext } from "../context/shopcontext.jsx";
import '../styls/prudact.css'


const Shop = () => {
  const {products,loading}=useContext(shopcontext)
  
  const sliderRef = useRef(null);
   
  const prev = () => {
    sliderRef.current?.scrollBy({ left: -332, behavior: 'smooth' });
  };

  const next = () => {
    sliderRef.current?.scrollBy({ left: 332, behavior: 'smooth' });
    console.log("wief");
    
  };
  
  return (
          <div className='container-fluid'>
            {loading? <div className="loading">🌀 در حال بارگذاری...</div> : ""}
            <div className="prant-slide col-12">
              <button className="nav left" onClick={prev}>‹</button>
              <div className="  slider " ref={sliderRef}>
                  {products.map((prudactdata) => (
                    <Prudact key={prudactdata.id} data={prudactdata} />
                  ))}
              </div>
              <button className="nav right" onClick={next}>›</button>
            </div>
          </div>
  );
};

export default Shop;