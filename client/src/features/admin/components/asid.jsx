import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

export default function Asid(){
    return(
        <div className="fixed top-0 right-0 h-screen w-1/4 flex flex-col items-center justify-center border bg-slate-100 ">
           <Link to={ROUTES.ADMIN_PRODUCTS} className="mb-[20px] cursor-pointer">محصولات</Link >
           <Link to={ROUTES.ADMIN_USERS} className="cursor-pointer">کاربران</Link >
        </div>
    )
}