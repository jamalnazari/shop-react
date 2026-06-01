
export default function Boyasdasteh(){

    return(
            <div className="mt-2 grid grid-cols-3 md:grid-rows-2 grid-rows-3 grid-rows-[auto,1fr,1fr]   md:grid-cols-6 ">
                <p className="col-span-3 md:col-span-7 flex items-center justify-center ">خرید براساس دسته&zwnj;بندی</p>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./home.jpg" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">خانه و زندگی</p>
                </div>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./mobile.jpg" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">موبایل</p>
                </div>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./pushak.png" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">پوشاک</p>
                </div>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./clener.png" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">ارایشی و بهداشتی</p>
                </div>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./laptap.jpg" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">لپتاب</p>
                </div>
                <div className="p-5 cursor-pointer">
                    <img className="max-h-[110px]" src="./super.png" alt="" />
                    <p className="text-xs lg:pr-[20%]  md:text-sm">سوپر مارکت</p>
                </div>
            </div>
    )
}