

export const Footer=()=>{

    return(
        <div className="flex w-full pb-5  bg-blue-100 flex-col">
            <div className="flex ">
                <div className="w-[40%]">
                   <button className="w-[100%] text-sm md:w-[30%] text-center p-3 m-5 border border-black rounded ">رفتن به بالا</button>
                </div>
                <div className="grow text-end">
                   <img className="m-8 w-[40%]  " src="./digikala-logo.svg" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center m-10">
               <p className="m-5">تلفن پشتیبانی 021_61930000 | 021_91000100</p>
               <p>هفت روز هفته 24 ساعته پاسخگو هستیم</p>
            </div>
        </div>
    )
}