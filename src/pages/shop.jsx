import Prudact from "./prudact.jsx";
import { useContext,useRef } from "react";
import '../styls/prudact.css'
import { Apicontext } from "../context/Apicontext.jsx";
import { Link } from "react-router-dom";

const Shop = () => {
  const {res1,res2,res3}=useContext(Apicontext)
  
  const sliderRef = useRef(null);
   
  const prev = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const next = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    
  };
  
  
  return (
          <div className=' shop text-end'>
            <div className="container">
              <div className="row">
                <div className="prant-slide col-12 " >
                  <p className="Market">
                  هایپر مارکت
                  </p>
                  <button className="nav left" onClick={prev}>‹</button>
                  <div className="  slider " ref={sliderRef}>
                      {res1.map((prudactdata) => (
                        <Prudact key={prudactdata.id} data={prudactdata} />
                      ))}
                  </div>
                  <button className="nav right" onClick={next}>›</button>
                </div>
              </div>
            </div>
            <div className=" container">
              <div className="vitreen row">
                <Link to="/category/kitchen-accessories" className="chvitreen col-6 col-md-3">
                  <img src="/home.jpg"/>
                  <p>ظروف آشپزی</p>
                </Link>
                <Link to="/category/laptops" className="chvitreen col-6 col-md-3">
                  <img src="/laptap.jpg"/>
                  <p>لپتاپ</p>
                </Link>
                <Link to="/category/smartphones" className="chvitreen col-6 col-md-3">
                  <img src="/mobile.jpg"/>
                  <p>موبایل</p>
                </Link>
                <Link to="/category/motorcycle"  className="chvitreen col-6 col-md-3">
                  <img src="/motor.jpg"/>
                  <p>موتور</p>
                </Link>
              </div>
            </div>
              <div className="container ">
                <div className="row vitreen2 ">
                  <div className="col-5 vitreen2-a">
                    <div className="row">
                       {res2.map(p=>(
                        <div key={p.id} className="col-12 col-md-6">
                          <img src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </div>
                       ))}
                    </div>
                  </div>
                  <div className="col-5 vitreen2-b">
                    <div className="row">
                      {res3.map(p=>(
                        <div key={p.id} className="col-12 col-md-6">
                          <img src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
          </div>
  );
};

export default Shop;