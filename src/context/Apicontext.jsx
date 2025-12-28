import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const Apicontext = createContext(null);

const Apiprovider = ({ children }) => {
  const [res1, setres1] = useState([]);
  const categoryGroups = {
      fashion: [
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-dresses",
        "womens-shoes",
        "womens-watches",
        "womens-bags",
        "tops",
      ],
      digital: [
        "smartphones",
        "laptops",
        "tablets",
        "mobile-accessories",
      ],
      tech: [
        "lighting",
        "automotive",
        "motorcycle",
      ],
      home: [
        "home-decoration",
        "furniture",
        "kitchen-accessories",
        "groceries",
      ],
      beauty: [
        "beauty",
        "fragrances",
        "skin-care",
      ],
    };

  useEffect(() => {
    const asynres = async () => {

      try{
        for(const a in categoryGroups){
          const category=categoryGroups[a]
          const p=category.map(r => setTimeout(axios.get(`/api/products/category/${r}`),200 ))
          const res= await Promise.allSettled(p)
          const j=res.filter(z=> z.status ==="fulfilled")
          const prod=j.flatMap(x=> x.value.data.products)
          console.log(prod);
          setres1(re => [...re , ...prod])
          
          
        }
      }
      catch(e){
        console.log(e);
        
      }
      // try {
      //   const promises = categories.map((cat) =>
      //     axios.get(`/api/products/category/${cat}`)
        
      //   );

      //   const responses = await Promise.allSettled(promises);

      //   const product = responses
      //     .filter((r) => r.status === "fulfilled")
      //     .flatMap((r) => r.value.data.products);
      //   console.log("محصولات:" , product);
        
      //   setres1(product);

      //   // لاگ خطاهای احتمالی
      //   responses
      //     .filter((r) => r.status === "rejected")
      //     .forEach((r) => console.log("failed:", r.reason));

      //   console.log("responses:", responses);
      // } catch (err) {
      //   console.log(err);
      // }
    };

    asynres();
  }, []);

  return (
    <Apicontext.Provider value={{ res1 }}>
      {children}
    </Apicontext.Provider>
  );
};

export default Apiprovider;