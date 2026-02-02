import ProtectedCart from "./protecting.jsx";
import Cart from "../../features/cart/cart.jsx";
//هرچقدرکه بخوام میتونم saveroute بسازم 
const Savecart=()=>{

    return(
      <ProtectedCart>
            <Cart />
      </ProtectedCart>
    )
}
export default Savecart