import Home from "../components/Home";
import { useProducts } from "../../../context/ProductsContext";
import AsyncState from "../../../shared/AsyncState";

export const Homepage = () => {
  const { loading, error } = useProducts();

  return (
    <div className=''>
      {AsyncState({ loading, error, children: <Home /> })}
    </div>
  );
};