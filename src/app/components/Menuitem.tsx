'use client';
import { useState, useEffect } from "react";
import ProductCard from "./Productcard";
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Menu = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [showCart, setShowCart] = useState(false);
    const [isCheckout, setIsCheckout] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };
        const toggleCart = () => {
            setShowCart((prev) => !prev);
        };
        const goToCheckout = () => {
            setIsCheckout(true);
        };
        const clearCart = () => {
            setCart([]);
            localStorage.removeItem("cart")
        };
        return (
            <div className="relative min-h-screen py-6">
                <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
                    style={{
                        backgroundImage:
                            "url('https://th.bing.com/th/id/OIP.hgHTn8ng-KC091xFKZlzKgHaEo?w=290&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')"
                    }}>

                </div>
                <div className="relative z-10">
                    <div className="max-w-6xl mx-auto text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">Delicious Pizzas in our Menu</h1>
                        <p className="text-xl text-white">Explore our section of mouth watering pizzass</p>
                    </div>
                    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
                        {products.map((product) =>(
                            <ProductCard
                            key={product.id}
                            {...product}
                            onAddToCart={addToCart}/>
                        ))}

                    </div>
                    <div className="max-w-6xl mx-auto mt-8">
                        <button
                        onClick={toggleCart}
                        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-out transform">
                            {showCart ? 'Hide Cart':'View Cart'}({cart.length}items)
                        </button>
                        {showCart && (
                            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-4xl font-bold mb-4 text-blue-600">Your Cart Items Includes:</h2>
                                {cart.length>0?(
                                    <div>
                                        <ul>
                                            {cart.map((product,index)=>(
                                                <li
                                                key={index}
                                                className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out">
                                                <img 
                                                src={product.image}
                                                alt={product.image}
                                                className="w-20 h-40 sm:w-24 inline-block transition-transform duration-300 ease-in-out transform text-black"/>
                                                <span className="ml-4 text-lg font-medium text-slate-600">{product.name} - ${product.price}

                                                </span>

                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex justify-between items-center mt-6 text-black">
                                            <span className="font-semibold text-xl">Total:${cart.reduce((total,product) =>total+ product.price,0)}

                                            </span>
                                            <div>
                                                <button
                                                onClick={goToCheckout}
                                                className="bg-green-600 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-outtext-white transform hover:scale-110">
                                                 Proceed To Checkout
                                                </button>
                                                <button
                                                onClick={clearCart}
                                                className="bg-red-600 py-3 px-8 rounded-lg ml-4 text-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-outtext-white transform hover:scale-110">
                                                 Clear Cart
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                ):(
                                    <p className="text-lg text-slate-600">Your cart is empty</p>
                                )}
                            </div>
                        )}
                    </div>
                    {/*checkout section*/}
                    {isCheckout && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black ">
                            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                                <h2 className="text-4xl font-bold text-blue-600 mb-4 ">Checkout</h2>
                                <p className="text-lg text-red-600">Please confirm your order before proceeding</p>
                                <div className="mt-4">
                                    <ul>
                                        {cart.map((product,index) =>(
                                            <li key={index} className="flex justify-between mb-4">
                                                <span>{product.name}</span>
                                                <span>${product.price}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-between mt-4">
                                        <span className="font-semibold">Total:</span>
                                        <span className="font-semibold">${cart.reduce((total,product)=> total + product.price,0)}</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <button
                                    onClick={()=>setIsCheckout(false)}
                                    className="bg-slate-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-slate-600 transition duration-300">
                                     Close
                                    </button>
                                    <button
                                    onClick={()=>alert('Order Confirm.. Will Deliver At Your Door Step!')}
                                    className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-300">
                                     Confirm order
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>  
        );
};
export default Menu;
