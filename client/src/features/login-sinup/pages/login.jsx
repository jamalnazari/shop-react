import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"
import "../style/login.css"
function Login(){
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [loading,setloading]=useState(false)
    const navigat=useNavigate()

    const handlesubmit=()=>{
        console.log("oasr");
        
    }

    return(
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-4">
                <form className=" p-4 form-login" onSubmit={handlesubmit}>

                    <input 
                    className="w-100 input-login" 
                    type="email" 
                    value={email} 
                    onChange={(e)=>setemail(e.target.value)}
                    placeholder="ایمیل"
                    />
                    
                    <input 
                    className="w-100 input-login" 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setpassword(e.target.value)}
                    placeholder="رمزعبور"
                    />
                    <button 
                    className="w-50 button-login">
                        {loading? <Loade/>:"ورود"}
                    </button>

                    <p>حسابی‌ندارم.<Link to="/shop-react/sinup" >ثبت‌نام</Link></p>
                        
                </form> 
            </div>
          </div>
        </div>
    )
}
export default Login;