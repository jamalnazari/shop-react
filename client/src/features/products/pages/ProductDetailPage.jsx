import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import AsyncState from "../../../shared/AsyncState";
import { productService } from "../../../api/productService";
import ProductUi from "../components/productUi";
const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error , Seterror]=useState("")

  useEffect(() => {
    productService.getById(id)
    .then(data =>{
      setProduct(data)
      setLoading(false)
    }).catch(e=>{
      Seterror("مشکل در دسترسی به اینترنت")
      setLoading(false)
    })
    

  }, [id]);

  return (
    <>
      {AsyncState({loading:loading , error:error , children:<ProductUi data={product}/>})}
    </>
  )
};

export default ProductDetailPage;