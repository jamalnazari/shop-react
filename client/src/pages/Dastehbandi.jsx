import { useState } from "react";
import { Link } from "react-router-dom";
export const  Dastehha=()=>{
     const [openMenu ,setopenMenu]=useState(null)

     const toggel=(name)=>{
        setopenMenu(prev=> (prev===name? null :name))
     }
    return(
        <div className="Dastehha d-flex align-items-center flex-column text-center justify-content-start">
           <div className={`col-8 child-dastehha ${openMenu === "home" ? "open" : ""}`}>
              <p className="m-3" onClick={()=> toggel("home")}>خانه‌وزندگی</p>
              <Link to="/category/home-decoration">دکور</Link>
              <Link to="/category/furniture">مبلمان</Link>
              <Link to="/category/kitchen-accessories">ضروف‌آشپزی</Link>
              <Link to="/category/groceries">مواد‌غذایی</Link>
           </div>
           <div className={`col-8 child-dastehha ${openMenu === "fashion" ? "open" : ""}`}>
              <p className="m-3" onClick={()=> toggel("fashion")}>پوشاک</p>
              <Link to="/category/mens-shirts">پیراهن‌مردانه</Link>
              <Link to="/category/mens-shoes">کفش مردانه</Link>
              <Link to="/category/mens-watches">ساعت مردانه</Link>
              <Link to="/category/womens-dresses">مانتو‌زنانه</Link>
              <Link to="/category/womens-shoes">کفش زنانه</Link>
              <Link to="/category/womens-watches">ساعت‌زنانه</Link>
              <Link to="/category/womens-bags">کیف‌زنانه</Link>
              <Link to="/category/tops">تاب</Link>
           </div>
           <div className={`col-8 child-dastehha ${openMenu === "tech" ? "open" : ""}`}>
              <p className="m-3" onClick={()=> toggel("tech")}>تکنولوژی‌ولوازم‌جانبی</p>
              <Link to="/category/laptops">لپتاپ</Link>
              <Link to="/category/smartphones">گوشی</Link>
              <Link to="/category/tablets">تبلت</Link>
              <Link to="/category/mobile-accessories">جانبی</Link>
           </div>
           <div className={`col-8 child-dastehha ${openMenu === "digital" ? "open" : ""}`} >
              <p className="m-3" onClick={()=> toggel("digital")}>دیجیتال و الکترونیک</p>
              <Link to="/category/automotive">خودرویی</Link>
              <Link to="/category/lighting">روشنایی</Link>
              <Link to="/category/motorcycle">موتور‌سیکلت</Link>
           </div>
           <div className={`col-8 child-dastehha ${openMenu === "beauty" ? "open" : ""}`}>
              <p className="m-3" onClick={()=> toggel("beauty")}>زیبایی و سلامت</p>
              <Link to="/category/beauty">زیبایی</Link>
              <Link to="/category/fragrances">اتکلن</Link>
              <Link to="/category/skin-care">نرم‌کننده</Link>
           </div>
        </div>
    )
}