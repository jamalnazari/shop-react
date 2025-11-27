import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
const Form = ()=>{
        const schema = yup.object().shape({
        name : yup.string().required(),
        email: yup.string().email().required(),
        age : yup.number().positive().min(18).max(100).required(),
        password : yup.string().min(4).max(15).matches(/[A-z]+/).matches(/\d+/).required("نامعتبر"),//regular expresstion
        confirmpassword: yup.string().oneOf([yup.ref("password")] , "password not maths").required()
             })
    const {register , handleSubmit , formState:{errors}}= useForm({resolver :yupResolver(schema)})
    const onFormSubmit=(data)=>{

        console.log("submited");
        console.log(data)
    }
    return(
      <div className="container d-flex justify-content-around">
        <div className="div-parent-form col-6">
          <form className="vertical-form flex-wrap "  onSubmit={handleSubmit(onFormSubmit)}>
            <input className="inps-form" type="text" placeholder="name..."{...register("name")}/>
            <input className="inps-form" type="text" placeholder="Email..."{...register("email")}/>
            <input className="inps-form" type="number" placeholder="Age..."{...register("age")}/>
            <input className="inps-form" type="password" placeholder="password..."{...register("password")}/>
            {errors.name &&(
              <p>{errors.password?.message}</p>//خطایی که yupresolver از yup گرفته رو میتوی با این قسمت نشون بدی
            )}
            <input className="inps-form" type="password" placeholder="confirm Password..."{...register("confirmpassword")}/>
            <input className="inps-form bg-success" type="submit" value={"login"}/>
          </form>
        </div>
      </div>  
    )
}

export default Form;