import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const Cat = async () => {
      setProducts([]); // پاک شدن قبلی
      const res = await axios.get(`https://dummyjson.com/products/category/${slug}`);
      setProducts(res.data.products);
    };

    Cat();
  }, [slug]);

  return (
    <div className="container col-12 d-flex flex-wrap " style={{paddingTop:'100px'}} >
      {products.map(p => (
        <div key={p.id} className="col-3">
          <img src={p.thumbnail} alt={p.title} />
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}