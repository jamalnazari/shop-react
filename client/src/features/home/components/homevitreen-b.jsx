import { useContext } from "react"
import { Link } from "react-router-dom"
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
                        <Link key={p.id} to={`/product/${p.id}`} className="col-12 col-md-6 text-decoration-none text-dark">
                          <img className="img-fluid" src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </Link>
                       ))}
                    </div>}
                  </div>
                  <div className="col-5 vitreen2-b">
                    {loading3?<Loade/>:<div className="row">
                      {res3.map(p=>(
                        <Link key={p.id} to={`/product/${p.id}`} className="col-12 col-md-6 text-decoration-none text-dark">
                          <img className="img-fluid" src={p.thumbnail} alt={p.title}/>
                          <p>{p.title}</p>
                        </Link>
                       ))}
                    </div>}
                  </div>
                </div>
              </div>
    )
}