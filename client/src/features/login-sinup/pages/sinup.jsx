import { useState } from "react";
import Loade from "../../../sheared/Loading/CircleLoading";
import { Link, useNavigate } from "react-router-dom";
import "../style/sinup.css"
function Form(){

    const [username,setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const [loading,setloading]=useState(false)
    const navigat=useNavigate()


    const handlesubmit=(e)=>{
        setloading(true)
        e.preventDefault()
         fetch("http://localhost:3001/users" , {
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify({password,email,username})
         })
         .then(res=>res.json())
         .then(data=>console.log(data))
         setloading(false)
         if(!loading) navigat("/shop-react/")
    }
    return (
      <div className="container ">
        <div className="row w-100 d-flex justify-content-center">
            <div className="col-12 col-sm-10 col-md-4">
                <form className=" p-4 form-sinup" onSubmit={handlesubmit}>

                    <input 
                    className="w-100 input-sinup" 
                    type="username" 
                    value={username} 
                    onChange={(e)=>setusername(e.target.value)}
                    placeholder="نام کاربری"
                    />

                    <input 
                    className="w-100 input-sinup" 
                    type="email" 
                    value={email} 
                    onChange={(e)=>setemail(e.target.value)}
                    placeholder="ایمیل"
                    />
                    
                    <input 
                    className="w-100 input-sinup" 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setpassword(e.target.value)}
                    placeholder="رمزعبور"
                    />
                    <button 
                    className="w-50 button-sinup">
                        {loading? <Loade/>:" ثبتنام"}
                    </button>

                    <p>قبلا ثبتنام‌کردم  .<Link to="/shop-react/login" >ورود </Link></p>
                        
                </form>
            </div>    
        </div>
      </div>
    )

}

export default Form;