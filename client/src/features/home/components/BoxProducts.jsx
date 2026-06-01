import { Link } from "react-router-dom";

export default function BoxProducts({data}){
     
    return (
            <div className="flex justify-center flex-wrap mt-10">
               {data.map(product=>(
                 <Link to={`/shop-react/product/${product.id}`}  className=" m-2 rounded cursor-pointer p-5 border hover:shadow-xl" key={product.id}>
                    <img className="max-h-[100px] md:max-h-[200px]" src={product.image} alt={product.name}/>
                    <p className="text-end text-sm">{product.name}</p>
                    <p className="text-start text-sm mt-2">{product.price}</p>
                 </Link>
               ))}
            </div>
    )
}