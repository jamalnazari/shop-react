import { useEffect, useState } from "react"
import { useNavigate,Link, data } from "react-router-dom"
import "../style/login.css"
import Loade from "../../../sheared/Loading/CircleLoading"
function Login(){
    const [users,setusers]=useState([])
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [loading,setloading]=useState(false)
    const navigat=useNavigate()

    useEffect(()=>{
        fetch("http://localhost:3001/users")
        .then(res=>res.json())
        .then(data=>setusers(data))
        
    },[])

    const handlesubmit=(e)=>{
        setloading(true)
        e.preventDefault()
        
         const user=users.find(u=> u.email===email&&u.password===password )
         if(user) navigat("/shop-react/")
         console.log(user);
         setloading(false)            
        
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