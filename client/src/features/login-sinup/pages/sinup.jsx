import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/sinup.css"
function Form(){

    const [username,setusername]=useState("")
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")
    const navigat=useNavigate()


    const handlesubmit=(e)=>{
      
        e.preventDefault()
        localStorage.setItem("user" , JSON.stringify({username,password,email}))
        navigat('/shop-react/')
    }
    return (
      <div className="container-fluid ">
        <div className="row w-100  d-flex justify-content-center">
            <div className="col-12  col-sm-10 col-md-7">
                <form className="  form-sinup" onSubmit={handlesubmit}>

                    <div className="div1">
                        <p className="p1">ثبت‌نام</p>
                        <p className="p2">قبلا ثبتنام‌کردم <Link to="/shop-react/login" >ورود </Link></p>
                    </div>
                    <div className="div2">
                        <input 
                        className=" input-sinup" 
                        type="username" 
                        value={username} 
                        onChange={(e)=>setusername(e.target.value)}
                        placeholder="نام کاربری"
                        />

                        <input 
                        className=" input-sinup" 
                        type="email" 
                        value={email} 
                        onChange={(e)=>setemail(e.target.value)}
                        placeholder="ایمیل"
                        />
                        
                        <input 
                        className=" input-sinup" 
                        type="password" 
                        value={password} 
                        onChange={(e)=>setpassword(e.target.value)}
                        placeholder="رمزعبور"
                        />
                        <button 
                        className="w-50 button-sinup">
                            ثبتنام
                        </button>
                    </div>    

                    
                        
                </form>
            </div>    
        </div>
      </div>
    )

}

export default Form;