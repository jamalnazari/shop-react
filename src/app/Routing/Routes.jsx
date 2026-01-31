import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryPage from "../../pages/catepages.jsx";
import { Dastehha } from "../../pages/Dastehbandi.jsx";
import Register from "../../pages/form2.jsx";
import Savecart from "../../app/Routing/protectingRouts.jsx";
import { Serch } from "../../pages/serchbar.jsx";
import Login from "../../pages/form.jsx";
import { Homepage } from "../../features/home/homepage.jsx";

export const AppRoutes=()=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
   return(
           <Routes>
             <Route path="/" element={<Homepage />} />
             <Route path="/shop-react/cart" element={<Savecart/>}/>
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/serch" element={<Serch />} />
             <Route path="/category/:slug" element={<CategoryPage />} />
             <Route path="/Dastehha" element={<Dastehha />} />
           </Routes>
   )
}