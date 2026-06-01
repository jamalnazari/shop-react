import { Link } from "react-router-dom";


export default function Asid(){
    return(
        <div className="fixed top-0 right-0 h-screen w-1/4 flex flex-col items-center justify-center border bg-slate-100 ">
           <Link to={'/shop-react/Admin/products'} className="mb-[20px] cursor-pointer">محصولات</Link >
           <Link to={'/shop-react/Admin/users'} className="cursor-pointer">کاربران</Link >
        </div>
    )
}