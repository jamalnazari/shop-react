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
      
      <form className="vertical-form " style={{marginTop:'200px'}} onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" placeholder="name..."{...register("name")}/>
        <input type="text" placeholder="Email..."{...register("email")}/>
        <input type="number" placeholder="Age..."{...register("age")}/>
        <input type="password" placeholder="password..."{...register("password")}/>
        {errors.name &&(
          <p>{errors.password?.message}</p>//خطایی که yupresolver از yup گرفته رو میتوی با این قسمت نشون بدی
        )}
        <input type="password" placeholder="confirm Password..."{...register("confirmpassword")}/>
        <input type="submit" />
      </form>

        
    )
}

export default Form;