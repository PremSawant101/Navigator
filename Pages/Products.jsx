import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <div className="min-h-screen pt-28 pb-20 bg-[#fafafa]">

            <div className="max-w-7xl mx-auto px-10">

                <div className="text-center mb-16">
                    <h1 className="products-title">MEN'S COLLECTION</h1>
                    <p className="products-subtitle">
                        Crafted for comfort, designed for confidence
                    </p>
                </div>

                <ul className="flex justify-center gap-6 mb-20 flex-wrap products-tabs">

                    <li>
                        <NavLink
                            to="men-tshirts"
                            className={({ isActive }) =>
                                `product-tab ${isActive ? "product-tab-active" : ""}`
                            }
                        >
                            T-SHIRTS
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="men-shirts"
                            className={({ isActive }) =>
                                `product-tab ${isActive ? "product-tab-active" : ""}`
                            }
                        >
                            SHIRTS
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="men-watches"
                            className={({ isActive }) =>
                                `product-tab ${isActive ? "product-tab-active" : ""}`
                            }
                        >
                            WATCHES
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="men-shoes"
                            className={({ isActive }) =>
                                `product-tab ${isActive ? "product-tab-active" : ""}`
                            }
                        >
                            SHOES
                        </NavLink>
                    </li>

                </ul>

                <div className="product-content">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Products;
