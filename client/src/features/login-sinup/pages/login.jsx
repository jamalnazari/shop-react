import { useEffect, useState } from "react"
import { useNavigate,Link, data } from "react-router-dom"
import "../style/login.css"
import Loade from "../../../sheared/Loading/CircleLoading"
function Login(){
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [loading,setloading]=useState(false)
    const navigat=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        const user=localStorage.getItem("user")
        const i=JSON.parse(user)
        if(i.email==email &&i.password==password) {
            navigat('/shop-react/')
        }
        else{
            console.log("no");
            
        }
        
    }
    
    return(
        <div className="container-fluid">
            <div className="row w-100 vh d-flex justify-content-center">
                <div className="col-12 col-sm-10 col-md-7">
                    <form className="form-login" onSubmit={handlesubmit}>
                        <div className="div1">
                            <p className="p1">ورود</p>
                            <p className="p2">حسابی‌ندارید؟<Link to="/shop-react/sinup" >ثبت‌نام</Link></p>
                        </div>
                        <div className="div2">
                            <input 
                            className=" input-login" 
                            type="email" 
                            value={email} 
                            onChange={(e)=>setemail(e.target.value)}
                            placeholder="ایمیل"
                            />
                            
                            <input 
                            className=" input-login" 
                            type="password" 
                            value={password} 
                            onChange={(e)=>setpassword(e.target.value)}
                            placeholder="رمزعبور"
                            />
                            <button 
                            className="w-50 button-login">
                            ورود 
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}
export default Login;