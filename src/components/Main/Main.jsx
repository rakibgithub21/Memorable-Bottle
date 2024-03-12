import { useEffect } from "react";
import { useState } from "react";
import Product from "../../Product/Product";
import Cart from "../../Cart/Cart";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/utilities";


const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    useEffect(() => {
        if (products.length) {
            const storedCart = getStoredCart();
            const savedCart = []
            for (const id of storedCart) {
                const product = products.find(product => product.id === id);
                savedCart.push(product)
            }
            setCart(savedCart)
        }
    }, [products])


    const [cart, setCart] = useState([])

    let Total = 0;
    for (const product of cart) {
        Total = Total + product.price + product.shipping
    }

    const handleButtonClicked = (product) => {
        if (cart.includes(product)) {
            setCart([...cart]);
            alert('You select this')
        }
        else {
            const newCart = [...cart, product];
            setCart(newCart)
            addToLS(product.id)
        }
    }
    // console.log(cart);

    const handleRemoveFromCart = (id) => {
        // remove form cart
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove form ls
        removeFromLS(id);
    }

    return (
        <div className="container mx-auto flex gap-5 my-14">
            <div className="w-4/6 ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleButtonClicked={handleButtonClicked}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="w-2/6 bg-amber-100 p-5 h-[650px] overflow-auto sticky top-0">
                <h3 className="text-center text-2xl font-semibold underline">Order Summary</h3>
                <p className=" text-lg font-medium">Selected Items: {cart.length}</p>
                <h3 className="font-medium">Total Price: {Total}</h3>
                {
                    cart.map((product, id) => <Cart
                        key={id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>)
                }

            </div>
        </div >
    );
};

export default Main;