import { useEffect } from "react";
import { useState } from "react";
import Product from "../../Product/Product";


const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div className="container mx-auto flex gap-2 my-14">
            <div className="w-4/6 ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="w-2/6 ">
                <h1>I am form bangladesh</h1>
            </div>
        </div>
    );
};

export default Main;