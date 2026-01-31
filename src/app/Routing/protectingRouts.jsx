import ProtectedCart from "../../components/protectedcart.jsx";
import Cart from "../../pages/cart.jsx";
//هرچقدرکه بخوام میتونم saveroute بسازم 
const Savecart=()=>{

    return(
      <ProtectedCart>
            <Cart />
      </ProtectedCart>
    )
}
export default Savecart