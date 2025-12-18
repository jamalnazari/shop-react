import { useState, useEffect } from "react";
import axios from "axios";
export const useCart = () => {
  const [products, setProducts] = useState([]);   // همیشه آرایه
   useEffect(() => {
      const asyres= async ()=>{
              try{
                 const res=await axios.get('/api/products')
                    
                      setProducts(res.data.products)
                      console.log(res);
                      
                      
              }  
              catch(err) {
              console.error(err);
                    

              };
           }      
           
           asyres();
  }, []);

  const [cartitem, setcartitem] = useState(() => {
    const data = localStorage.getItem("jimi");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("jimi", JSON.stringify(cartitem));
  }, [cartitem]);

  const addTocart = (itemid) => {
    if (!cartitem.find((item) => item.id === itemid))
      setcartitem([...cartitem, { id: itemid, count: 1 }]);
    else
      setcartitem(
        cartitem.map((item) =>
          item.id === itemid ? { ...item, count: item.count + 1 } : item
        )
      );
  };

  const removeFormcart = (itemid) => {
    setcartitem(
      cartitem.map((i) =>
        i.id === itemid
          ? { ...i, count: i.count === 0 ? 0 : i.count - 1 }
          : i
      )
    );
  };

  const resetitems = () => {
    setcartitem([]);
    localStorage.removeItem("jimi");
  };

  const [int , setint]=useState(0)

      useEffect(() => {
        let total = 0;
        
        cartitem.forEach(cartItem => {
            const product = products.find(prod => prod.id === cartItem.id);
            if (product) {
                total += Number(product.price) * cartItem.count;
            }
        });
        
        setint(total);
    }, [cartitem]); 

  return { cartitem, addTocart, removeFormcart, resetitems, int ,products};
};