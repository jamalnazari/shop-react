import { useEffect, useState } from "react";

export const Homeslider = () => {
 const imgs = [
  `${import.meta.env.BASE_URL}slide-1.png`,
  `${import.meta.env.BASE_URL}slide-2.png`,
  `${import.meta.env.BASE_URL}slide-3.png`,
  `${import.meta.env.BASE_URL}slide-4.png`,
  `${import.meta.env.BASE_URL}slide-5.png`,
  `${import.meta.env.BASE_URL}slide-6.png`,
];
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevcount => {
        if (prevcount === 5) {
          return 0;
        } else {
          return prevcount + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <sup className="mt-[110px] z-[-1] fixed  w-full overflow-x-auto left-[0%] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <img src={`${imgs[count]}`} className=" image-slide " alt="" />
    </sup>
  );
};