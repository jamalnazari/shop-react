import Prudact from "./prudact.jsx";
import { useContext,useRef } from "react";
import { shopcontext } from "../context/shopcontext.jsx";
import '../styls/prudact.css'
import { Apicontext } from "../context/Apicontext.jsx";


const Shop = () => {
  const {res1}=useContext(Apicontext)
  
  const sliderRef = useRef(null);
   
  const prev = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const next = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    
  };
  
  
  return (
          <div className='container shop'>
            
            <div className="prant-slide col-12 " >
              <button className="nav left" onClick={prev}>‹</button>
              <div className="  slider " ref={sliderRef}>
                  {res1.map((prudactdata) => (
                    <Prudact key={prudactdata.id} data={prudactdata} />
                  ))}
              </div>
              <button className="nav right" onClick={next}>›</button>
            </div>
          </div>
  );
};

export default Shop;