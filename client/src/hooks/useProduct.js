import { useEffect, useState } from "react";
import { productService } from "../api/productService";

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await productService.getById(id);
        if (!cancelled) setProduct(data);
      } catch {
        if (!cancelled) {
          setError("محصول یافت نشد");
          setProduct(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return { product, loading, error };
}
