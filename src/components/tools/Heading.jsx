import React from 'react';

const Heading = () => {
    return (
        <div className='text-center space-y-6 mb-16'>
            <h1 className='text-7xl font-bold'>Premium Digital Tools</h1>
            <p className='text-gray-500 leading-5'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className='btn gap-0 bg-white w-fit rounded-full flex mx-auto px-0 items-center'>
                <button className='btn bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-lg text-white hover:scale-105 transition-all duration-400 py-4'>Products</button>
                <button className='btn border-l-0 bg-white rounded-full text-lg text-black hover:scale-105 transition-all duration-400'>Cart (0)</button>
            </div>
        </div>
    );
};

export default Heading;