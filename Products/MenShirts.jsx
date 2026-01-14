import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

function MenShirts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchText, setSearchText] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [priceLimit, setPriceLimit] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/mens-shirts")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);

    let filteredProducts = products.filter(item =>
        item.title?.toLowerCase().includes(searchText.toLowerCase())
    );

    filteredProducts = filteredProducts.filter(item =>
        priceLimit ? item.price <= priceLimit : true
    );

    if (sortOrder === "low-high") filteredProducts.sort((a, b) => a.price - b.price);
    if (sortOrder === "high-low") filteredProducts.sort((a, b) => b.price - a.price);

    if (loading) return <div className="text-center py-20 tracking-widest">LOADING COLLECTION…</div>;

    return (
        <>
            <div className="mb-10">
                <div className="search-bar-icon">
                    <input type="search" placeholder="SEARCH SHIRTS" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <span><Search size={22} /></span>
                </div>
            </div>

            <div className="products-layout">
                <aside className="filter-sidebar sticky top-28">
                    <h3>FILTER</h3>

                    <div className="filter-group">
                        <p className="filter-title">SORT BY PRICE</p>
                        <label className="filter-option">
                            <input type="radio" name="sort" checked={sortOrder === "low-high"} onChange={() => setSortOrder("low-high")} />
                            Low to High
                        </label>
                        <label className="filter-option">
                            <input type="radio" name="sort" checked={sortOrder === "high-low"} onChange={() => setSortOrder("high-low")} />
                            High to Low
                        </label>
                    </div>

                    <div className="filter-group">
                        <p className="filter-title">PRICE RANGE</p>
                        <label className="filter-option">
                            <input type="radio" name="price" checked={priceLimit === 3000} onChange={() => setPriceLimit(3000)} />
                            Under ₹3000
                        </label>
                        <label className="filter-option">
                            <input type="radio" name="price" checked={priceLimit === 5000} onChange={() => setPriceLimit(5000)} />
                            Under ₹5000
                        </label>
                        <label className="filter-option">
                            <input type="radio" name="price" checked={priceLimit === 7000} onChange={() => setPriceLimit(7000)} />
                            Under ₹7000
                        </label>
                    </div>

                    <button className="reset-btn" onClick={() => { setSearchText(""); setSortOrder(""); setPriceLimit(null); }}>
                        RESET FILTERS
                    </button>
                </aside>

                <div className="men-products-grid">
                    {filteredProducts.map(item => (
                        <div className="men-product-card" key={item.id}>
                            <div className="men-product-img">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="men-product-info">
                                <h6>{item.title}</h6>
                                <span>Men · Shirts</span>
                                <div className="men-product-bottom">
                                    <p>₹ {item.price}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MenShirts;
