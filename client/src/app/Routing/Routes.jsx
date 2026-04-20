import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "../../features/products/pages/catepages.jsx";
import { Dastehha } from "../../features/dasteha/Dastehbandi.jsx";
import Savecart from "../../app/Routing/protectingRouts.jsx";
import { Homepage } from "../../features/home/pages/homepage.jsx";
import Form from "../../features/login-sinup/pages/sinup.jsx";
import Login from "../../features/login-sinup/pages/login.jsx";
import ProductDetailPage from "../../features/products/pages/ProductDetailPage.jsx";
export const AppRoutes=()=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
   return(
           <Routes>
             <Route path="/shop-react" element={<Homepage />} />
             <Route path="/shop-react/cart" element={<Savecart/>}/>
             <Route path="/category/:slug" element={<CategoryPage />} />
             <Route path="/product/:id" element={<ProductDetailPage />} />
             <Route path="/Dastehha" element={<Dastehha />} />
             <Route path="/shop-react/sinup" element={<Form />} />
             <Route path="/shop-react/login" element={<Login />} />
           </Routes>
   )
}