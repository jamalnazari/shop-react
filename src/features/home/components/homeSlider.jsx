import { useContext, useRef } from "react";
import Prudact from "../../../pages/prudact";
import { Apicontext } from "../context/Apicontext";
import Loade from "../../../sheared/Loading/CircleLoading";
export const Homeslider=()=>{

    const {res1,loading1}=useContext(Apicontext)
    const sliderRef = useRef(null);
   
    const prev = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const next = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    }
    return(
            <div className="container">
              <div className="row">
                <div className="prant-slide col-12 " >
                  <p className="Market">هایپر مارکت</p>
                  <button className="nav left" onClick={prev}>‹</button>
                  <div className="  slider " ref={sliderRef}>
                      {loading1?<Loade/>:res1.map((prudactdata) => (
                        <Prudact key={prudactdata.id} data={prudactdata} />
                      ))}
                  </div>
                  <button className="nav right" onClick={next}>›</button>
                </div>
              </div>
            </div>
    )
}