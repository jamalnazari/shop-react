import { useEffect, useState } from "react";

const IMGS = [
  `${import.meta.env.BASE_URL}slide-1.png`,
  `${import.meta.env.BASE_URL}slide-2.png`,
  `${import.meta.env.BASE_URL}slide-3.png`,
  `${import.meta.env.BASE_URL}slide-4.png`,
  `${import.meta.env.BASE_URL}slide-5.png`,
  `${import.meta.env.BASE_URL}slide-6.png`,
];

export const Homeslider = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % IMGS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[110px] z-[-1] fixed w-full overflow-x-auto left-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <img
        src={IMGS[count]}
        className="image-slide w-full object-cover"
        alt={`اسلاید ${count + 1}`}
      />
    </div>
  );
};