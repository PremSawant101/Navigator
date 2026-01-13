import React, { useEffect, useState } from "react";

function MenTshirts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/mens-shirts")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center py-20 text-lg tracking-widest">
                LOADING COLLECTION…
            </div>
        );
    }

    return (
        <div className="men-products-grid">
            {products.map(item => (
                <div className="men-product-card" key={item.id}>

                    <div className="men-product-img">
                        <img src={item.thumbnail} alt={item.title} />
                    </div>

                    <div className="men-product-info">
                        <h6>{item.title}</h6>
                        <span>Men · T-Shirts</span>

                        <div className="men-product-bottom">
                            <p>₹ {item.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default MenTshirts;
