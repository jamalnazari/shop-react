import { useContext } from "react";
import { CartContext } from "../context/Cartprovider";

export const  useCart=()=>{

    return useContext(CartContext)
}