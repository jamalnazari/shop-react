import axios from "axios";
import { useEffect, useState } from "react";
import { productService } from "../../../api/productService";
export default function ProductUi() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        description: "",
        category:"",
        image: ""
    });
    
    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('http://localhost:3001/products');
            setProducts(res.data);
        };
        getProducts();
    }, []);

    // مدیریت تغییرات ورودی‌های متن
    const handleChange = (e) => {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };


    // اضافه کردن محصول جدید
    const addProduct =  (e) => {
        e.preventDefault();  // جلوگیری از رفرش صفحه
        
        // اعتبارسنجی
        if (!newProduct.name || !newProduct.price || !newProduct.category) {
            alert("لطفاً همه فیلدها و عکس را پر کنید");
            return;
        }

        try {
            
            // ارسال به سرور
            productService.create({
                name: newProduct.name,
                price: Number(newProduct.price),
                description: newProduct.description,
                category:newProduct.category,
                image: `http://localhost:3001/${newProduct.category}/${newProduct.image}.png`
            });
            
            // اضافه کردن محصول جدید به لیست
            setProducts([...products, res.data]);
            // خالی کردن فرم
            setNewProduct({ name: "", price: "", description: "", image: "" , category:""});
            
            alert("محصول با موفقیت اضافه شد");
        } catch (error) {
            console.error("خطا در اضافه کردن محصول:", error);
            alert("خطا در اضافه کردن محصول");
        }
    };

    // حذف محصول
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/products/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-4 w-3/4">
            {/* فرم اضافه کردن محصول */}
            <form onSubmit={addProduct} className="flex flex-col gap-3 mb-8 p-4 border rounded-lg">
                <h2 className="text-xl font-bold">➕ افزودن محصول جدید</h2>
                
                <input 
                    type="text"
                    placeholder="نام محصول"
                    onChange={handleChange}
                    value={newProduct.name}
                    name="name"
                    className="border p-2 rounded"
                />

                <input 
                    type="number"
                    placeholder="قیمت (تومان)"
                    onChange={handleChange}
                    value={newProduct.price}
                    name="price"
                    className="border p-2 rounded"
                />
                <input 
                    type="text"
                    placeholder="توضیحات محصول"
                    onChange={handleChange}
                    value={newProduct.description}
                    name="description"
                    className="border p-2 rounded"
                />
                <input 
                    type="text"
                    placeholder="دسته"
                    onChange={handleChange}
                    value={newProduct.category}
                    name="category"
                    className="border p-2 rounded"
                />

                <input 
                    type="text"
                    onChange={handleChange}
                    className="border p-2 rounded"
                    placeholder="تصویر محصول"
                    value={newProduct.image}
                    name="image"
                />

                <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-700">
                    افزودن محصول
                </button>
            </form>

            {/* لیست محصولات */}
            <div>
                <h2 className="text-xl font-bold mb-4">📦 لیست محصولات</h2>
                {products.map(product => (
                    <div className="flex items-center gap-4 p-2 border-b" key={product.id}>
                        <img src={product.image} alt="" className="w-16 h-16 object-cover rounded" />
                        <p className="flex-1">{product.name}</p>
                        <p className="font-bold">{product.price.toLocaleString()} تومان</p>
                        <button 
                            onClick={() => deleteProduct(product.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                            حذف
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}