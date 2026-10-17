import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsyncState from "../../../shared/AsyncState";
import { productService } from "../../../api/productService";
import ProductUi from "../components/productUi";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    if (id) {
      productService
        .getById(id)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => {
          setError("محصول مورد نظر یافت نشد یا ارتباط با سرور برقرار نشد.");
          setLoading(false);
        });
    } else {
      // اگر در آدرس /product بدون شناسه وارد شده بود، اولین محصول انبار را به عنوان نمونه نمایش بده
      productService
        .getAll()
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setProduct(data[0]);
          } else {
            setError("هیچ محصولی در انبار یافت نشد.");
          }
          setLoading(false);
        })
        .catch(() => {
          setError("مشکل در دریافت اطلاعات محصولات از سرور.");
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      {AsyncState({
        loading,
        error,
        children: product && <ProductUi data={product} />,
      })}
    </>
  );
};

export default ProductDetailPage;
