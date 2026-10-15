import { useEffect, useState } from "react";
import { productService } from "../../../api/productService";
import Button from "../../../shared/components/buttons/button";
import Input from "../../../shared/components/input";
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
            const res = await productService.getAll();
           setProducts([...res]) 
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

        
            
            // ارسال به سرور
            productService.create({
                name: newProduct.name,
                price: Number(newProduct.price),
                description: newProduct.description,
                category:newProduct.category,
                image: `${import.meta.env.VITE_API_URL}/${newProduct.category}/${newProduct.image}.png`
            }).then(data=> setProducts([...products, data]))
            
            setNewProduct({ name: "", price: "", description: "", image: "" , category:""});
            
            alert("محصول با موفقیت اضافه شد");
        
    };

    // حذف محصول
    const deleteProduct = async (id) => {
        try {
            await productService.delete(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="p-4 w-full">
            {/* فرم اضافه کردن محصول */}
            <form onSubmit={addProduct} className="flex flex-col gap-3 mb-8 p-4 border rounded-lg">
                <h2 className="text-xl font-bold">➕ افزودن محصول جدید</h2>
                
                <Input 
                    type="text"
                    placeholder="نام محصول"
                    onChange={handleChange}
                    value={newProduct.name}
                    name="name"
                    className="p-2 rounded"
                />

                <Input 
                    type="number"
                    placeholder="قیمت (تومان)"
                    onChange={handleChange}
                    value={newProduct.price}
                    name="price"
                    className="p-2 rounded"
                />
                <Input 
                    type="text"
                    placeholder="توضیحات محصول"
                    onChange={handleChange}
                    value={newProduct.description}
                    name="description"
                    className="p-2 rounded"
                />
                <Input 
                    type="text"
                    placeholder="دسته"
                    onChange={handleChange}
                    value={newProduct.category}
                    name="category"
                    className="p-2 rounded"
                />

                <Input 
                    type="text"
                    onChange={handleChange}
                    className="p-2 rounded"
                    placeholder="تصویر محصول"
                    value={newProduct.image}
                    name="image"
                />

                <Button type="submit" variant="success" size="md">
                    افزودن محصول
                </Button>
            </form>

            {/* لیست محصولات */}
            <div>
                <h2 className="text-xl font-bold mb-4">📦 لیست محصولات</h2>
                {products.map(product => (
                    <div className="flex items-center gap-4 p-2 border-b" key={product.id}>
                        <img src={product.image} alt="" className="w-16 h-16 object-cover rounded" />
                        <p className="flex-1">{product.name}</p>
                        <p className="font-bold">{product.price.toLocaleString()} تومان</p>
                        <Button 
                            variant="danger"
                            size="sm"
                            onClick={() => deleteProduct(product.id)}
                        >
                            حذف
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}