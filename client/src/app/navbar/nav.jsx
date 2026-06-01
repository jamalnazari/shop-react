import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faL } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import React , { useEffect, useState } from "react";

const Navbar = () => {

  const [ishidden , setIsHidden]=useState(false)
  
  useEffect(() => {
  
  const handleScroll = () => {
    if(window.scrollY>400){

    setIsHidden(true);
    }else{
      setIsHidden(false)
    }
  };
  
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className={`${ ishidden? "lg:h-[60px]" : "lg:h-[100px]"} h-[100px] transition-all  duration-500 opacity-100 fixed w-full z-[40] bg-white h-auto`}  >
      <div className="max-lg:hidden">
        <div className="w-full relative mt-3 flex bg-white z-[100]  opacity-100">
          <div className=" flex w-1/5 ml-2">
            <div className="w-2/5 ">
              <Link to="/shop-react/cart" className="flex items-center justify-center h-full text-xl w-full">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </div>
            <div className="grow">
              <Link to={"/shop-react/sinup"}>
                <button className="w-full border rounded-[7px] p-2 text-xs">ورود | ثبت‌نام</button>
              </Link>
            </div>
          </div>
          <div className="flex absolute right-0 ">
              <div className="flex p-2 bg-slate-100 mr-2 z-[100] w-[500px] rounded-[19px] ">
                <div className="w-[90%] bg-transparent">
                  <input className="bg-transparent h-full text-end text-xs w-full" type="text" placeholder="جستجو" />
                </div>
                <div className="text-center grow">
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
              <div className="shrink-0">
                  <img style={{width:"195px" , height:"35px"}} src="digikala-logo.svg" alt="" />
              </div>
          </div>
        </div>
        <div className={`${ishidden? "close" : 'open'} z-[1] w-full flex justify-end`}>
              <div className="m-3 pt-2 text-xs text-slate-500 cursor-pointer">شگفت&zwnj;انگیز</div>
              <div className="m-3 pt-2 text-xs text-slate-500 cursor-pointer">سوپرمارکت</div>
              <div className="m-3 pt-2 text-xs text-slate-500 cursor-pointer">طلاونقره دیجیتال</div>
              <div className="m-3 pt-2 text-xs text-slate-500 cursor-pointer">پرفروشترینها</div>
              <div className="m-3 pt-2 text-xs cursor-pointer">دسته&zwnj;بندی کالاها</div>
        </div>
      </div>

      <div className="h-full lg:hidden bg-slate-100 py-[15px] ">
        <div className="flex flex-row-reverse">
           <div className="bg-white rounded-[30px] mx-[4%] border-2 w-[85%] flex flex-row-reverse">
             <FontAwesomeIcon className="m-2 pt-1 text-slate-300" icon={faSearch}/>
             <p className="m-1 pt-2 text-xs text-slate-300">جستجو در</p>
             <img src="digikala-logo.svg" alt="" className="w-[90px] m-1 h-[30px]"/>
           </div>
           <div className="p-2 bg-white text-center border-2 rounded-[50%] w-[45px]">
             <FontAwesomeIcon className="text-lg" icon={faBell} />
           </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
