import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loade from "../sheared/Loading/CircleLoading";

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {      
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await axios.get(
          `https://dummyjson.com/products/category/${slug}`
        );
        setProducts(res.data.products);
      } catch (err) {
        console.error("Error fetching category:", err);
        setError("خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  // حالت لودینگ
  if (loading) {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <Loade />
      </div>
    );
  }

  // حالت خطا
  if (error) {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="alert alert-danger text-center">
          {error}
        </div>
      </div>
    );
  }

  // حالت خالی
  if (!products || products.length === 0) {
    return (
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="alert alert-warning text-center">
          هیچ محصولی در این دسته‌بندی یافت نشد.
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-wrap" style={{ paddingTop: "100px" }}>
      {products.map((p) => (
        <Link
          key={p.id}
          to={`/product/${p.id}`}
          className="col-12 col-md-5 Catepagesproduct mb-4 text-decoration-none text-dark"
        >
          <div className="row flex-wrap align-items-center">
            <img
              className="col-4 img-fluid rounded"
              src={p.thumbnail}
              alt={p.title}
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="col-8">
              <h5 className="col-12">{p.title}</h5>
              <p className="col-12 text-success fw-bold">
                ${p.price.toFixed(2)}
              </p>
            </div>
            <p className="col-12 mt-2 text-muted">{p.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}