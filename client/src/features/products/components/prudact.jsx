import { Link } from "react-router-dom";

const Prudact = ({ data }) => {          

  return (
    <Link to={`/product/${data.id}`} className="text-decoration-none text-dark col-4 col-sm-3 col-lg-2  prudoct">
          <img src={data.thumbnail} alt={data.title} className="col-12 product-img " />
          <h5 className="fontG">{data.title}</h5>
          <p className="fontG">{data.price.toLocaleString()}$</p>
    </Link>
    );
};

export default Prudact;