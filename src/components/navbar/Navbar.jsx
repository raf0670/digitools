import React from 'react';
import shoppingCartImg from "../../assets/products/shopping-cart.png";

const Navbar = () => {
    return (
        <div className="p-4 bg-base-100 shadow-sm mb-14">
            <div className='w-10/12 flex items-center mx-auto'>
                <div className="navbar-start">
                    <h1 className='bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold text-3xl'>Digitools</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 text-xl font-semibold menu menu-horizontal px-1">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <div className='flex gap-3 items-center'>
                        <img src={shoppingCartImg} className='w-5 h-5' alt="" />
                        <h2 className='text-xl font-semibold'>Login</h2>
                    </div>
                    <div>
                        <button className='btn bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-xl text-white hover:scale-105 transition-all duration-400'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;