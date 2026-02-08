import { useState } from "react"
import { useNavigate,Link} from "react-router-dom"
function Login(){
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
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
                    <form className="form-auth" onSubmit={handlesubmit}>
                        <div className="div1">
                            <p className="p1">ورود</p>
                            <p className="p2">حسابی‌ندارید؟<Link to="/shop-react/sinup" >ثبت‌نام</Link></p>
                        </div>
                        <div className="div2">
                            <input 
                            className=" input-auth" 
                            type="email" 
                            value={email} 
                            onChange={(e)=>setemail(e.target.value)}
                            placeholder="ایمیل"
                            />
                            
                            <input 
                            className=" input-auth" 
                            type="password" 
                            value={password} 
                            onChange={(e)=>setpassword(e.target.value)}
                            placeholder="رمزعبور"
                            />
                            <button 
                            className="w-50 button-auth">
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