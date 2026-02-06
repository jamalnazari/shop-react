import { Link } from "react-router-dom";

export const Homevitreen1=()=>{

    return(
            <div className=" container">
              <div className="vitreen row">
                <Link to="/category/kitchen-accessories" className="chvitreen col-6 col-md-3">
                  <img src="/shop-react/home.jpg"/>
                  <p>ظروف آشپزی</p>
                </Link>
                <Link to="/category/laptops" className="chvitreen col-6 col-md-3">
                  <img src="/shop-react/laptap.jpg"/>
                  <p>لپتاپ</p>
                </Link>
                <Link to="/category/smartphones" className="chvitreen col-6 col-md-3">
                  <img src="/shop-react/mobile.jpg"/>
                  <p>موبایل</p>
                </Link>
                <Link to="/category/motorcycle"  className="chvitreen col-6 col-md-3">
                  <img src="/shop-react/motor.jpg"/>
                  <p>موتور</p>
                </Link>
              </div>
            </div>
    )
}