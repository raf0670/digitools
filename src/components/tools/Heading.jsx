import React from 'react';

const Heading = ({ toggle, setToggle, selectedTools }) => {
    const toggleClick = (option) => {
        if (option === "products") {
            setToggle("products");
        } else {
            setToggle("cart");
        }
    }

    return (
        <div className='text-center space-y-6 mb-16'>
            <h1 className='text-7xl font-bold'>Premium Digital Tools</h1>
            <p className='text-gray-500 leading-5'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className='btn gap-0 bg-white w-fit rounded-full flex mx-auto px-0 items-center'>
                {
                    toggle === "products" ? <div>
                        <button onClick={() => toggleClick("products")} className='btn bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-lg text-white hover:scale-105 transition-all duration-400 py-4'>Products</button>
                        <button onClick={() => toggleClick("cart")} className='btn border-l-0 bg-white rounded-full text-lg text-black hover:scale-105 transition-all duration-400'>Cart ({selectedTools.length})</button>
                    </div> : <div>
                        <button onClick={() => toggleClick("products")} className='btn border-r-0 bg-white rounded-full text-lg text-black hover:scale-105 transition-all duration-400 py-4'>Products</button>
                        <button onClick={() => toggleClick("cart")} className='btn bg-linear-to-r from-indigo-500 to-purple-500 bg-white rounded-full text-lg text-white hover:scale-105 transition-all duration-400'>Cart ({selectedTools.length})</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Heading;