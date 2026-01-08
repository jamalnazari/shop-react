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
    <div className="container  d-flex flex-wrap " style={{paddingTop:'100px'}} >
      {products.map(p => (
        <div key={p.id} className="col-12 col-md-5 Catepagesproduct ">
          <div className="row flex-wrap">
            <img className="col-4" src={p.thumbnail} alt={p.title} />
            <p className="col-3">{p.title}</p>
            <p className="col-1">{p.price}</p>
            <p className="col-12">{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}