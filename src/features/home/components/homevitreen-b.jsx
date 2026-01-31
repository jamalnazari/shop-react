import { useContext } from "react"
import { Apicontext } from "../context/Apicontext"
import Loade from "../../../sheared/Loading/CircleLoading"
export const Homevitreen2=()=>{
  const {res2,res3,loading2,loading3}=useContext(Apicontext)


    return(
        <div className="container ">
                <div className="row vitreen2 ">
                  <div className="col-5 vitreen2-a">
                    {loading2?<Loade/>:<div className="row">
                       {res2.map(p=>(
                        <div key={p.id} className="col-12 col-md-6">
                          <img className="img-fluid" src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </div>
                       ))}
                    </div>}
                  </div>
                  <div className="col-5 vitreen2-b">
                    {loading3?<Loade/>:<div className="row">
                      {res3.map(p=>(
                        <div key={p.id} className="col-12 col-md-6">
                          <img className="img-fluid" src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </div>
                       ))}
                    </div>}
                  </div>
                </div>
              </div>
    )
}