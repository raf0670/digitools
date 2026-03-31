import React from 'react';
import shoppingCartImg from "../../assets/products/shopping-cart.png";
import Badge from './Badge';

const Navbar = () => {
    return (
        <div className="p-4 bg-base-100 shadow-sm">
            <div className='w-11/12 lg:w-10/12 flex items-center mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 font-semibold">
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
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
                        <div className='relative'>
                            <img src={shoppingCartImg} className='w-5 h-5' alt="" />
                            <Badge></Badge>
                        </div>
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