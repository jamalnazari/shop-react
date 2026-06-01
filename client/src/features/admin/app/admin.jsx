import Asid from "../components/asid"
import ProductUi from "../components/products-Ui";
import UsersUi from "../components/users-ui";
import { Routes , Route } from "react-router-dom";


export default function Admin() {
    
    return(
        <div>
            <Asid/>

            <Routes>
                <Route path="products" element={<ProductUi/>}/>
                <Route path="users" element={<UsersUi/>}/>
            </Routes>
        </div>
    )
}