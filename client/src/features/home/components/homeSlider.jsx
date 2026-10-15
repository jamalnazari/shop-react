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
    <div className="relative w-full overflow-hidden mb-4">
      <img
        src={IMGS[count]}
        onError={(e) => {
          if (!e.currentTarget.dataset.retried) {
            e.currentTarget.dataset.retried = "true";
            e.currentTarget.src = `./slide-${count + 1}.png`;
          }
        }}
        className="w-full h-auto max-h-[400px] object-cover transition-all duration-500"
        alt={`اسلاید ${count + 1}`}
      />
    </div>
  );
};
