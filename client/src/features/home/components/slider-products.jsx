import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function SliderProducts({ data }) {
    const scrollref = useRef(null)

    // اسکرول به راست (محصولات بعدی)
    const next = () => {
        if (scrollref.current) {
            scrollref.current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

    // اسکرول به چپ (محصولات قبلی)
    const prev = () => {
        if (scrollref.current) {
            scrollref.current.scrollBy({ left: -300, behavior: "smooth" })
        }
    }

    return (
        <div className="w-full h-[280px] relative rounded md:h-[350px] flex flex-col lg:flex-row-reverse items-center bg-red-600">
            
            {/* موبایل - تصویر بالایی */}
            <div className="w-full d-none h-[40px] flex justify-end pr-5 items-center">
                <img className="w-[30%]" src="./Amazing-mobile.svg" alt="" />
            </div>

            {/* دسکتاپ - تصاویر کناری */}
            <div className="w-[15%] hidden lg:flex flex-col justify-center items-center">
                <img src="./Amazings.svg" alt="" />
                <img src="./Amazing.svg" alt="" />
            </div>

            {/* دکمه قبلی - فقط در دسکتاپ */}
            <button 
                onClick={prev}
                className="absolute text-white z-10 hidden lg:flex items-center justify-center
                    top-1/2 -translate-y-1/2 left-[2%] 
                    bg-black/50 hover:bg-black/70 rounded-full w-8 h-8
                    transition-all duration-300 cursor-pointer"
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>

            {/* دکمه بعدی - فقط در دسکتاپ */}
            <button 
                onClick={next}
                className="absolute text-white z-10 hidden lg:flex items-center justify-center
                    top-1/2 -translate-y-1/2 right-[17%] 
                    bg-black/50 hover:bg-black/70 rounded-full w-8 h-8
                    transition-all duration-300 cursor-pointer"
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>

            {/* کانتینر اسکرول افقی */}
            <div 
                ref={scrollref} 
                className="mb-1 w-[100%] lg:w-[85%] h-[90%] items-center rounded-r-[10px] 
                    flex overflow-x-auto scroll-smooth
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {data.map((product) => (
                    <Link  to={`/shop-react/product/${product.id}`}
                        key={product.id} 
                        className="bg-white relative mx-[1px] cursor-pointer 
                            min-w-[28%] md:min-w-[20%] lg:min-w-[15%] h-[100%]"
                    >
                        <img 
                            className="h-[40%] absolute rounded object-contain" 
                            src={product.image} 
                            alt={product.name} 
                        />
                        
                        <p className="w-[20px] bg-red-600 rounded-full text-white text-xs p-1 
                            absolute left-[70%] bottom-[15%] h-[20px] flex items-center justify-center">
                            4%
                        </p>
                        
                        <p className="text-xs absolute top-[40%] text-end text-slate-500 line-clamp-2">
                            {product.description}
                        </p>
                        
                        <p className="absolute text-xs text-slate-400 line-through bottom-[15%]">
                            {product.price}
                            </p>
                        
                        <p className="absolute text-center text-xs text-slate-900 bottom-[3%]">
                            {Math.floor(product.price - product.price * 0.04)} تومان
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}