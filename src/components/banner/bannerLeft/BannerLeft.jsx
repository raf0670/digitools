import React from 'react';

const BannerLeft = () => {
    return (
        <div className='w-full space-y-6'>
            <div className='bg-[#E1E7FF] w-fit px-4 py-1 rounded-full flex gap-4 items-center'>
                <div className='bg-linear-to-r from-indigo-300 to-purple-300 rounded-full h-4 w-4 flex justify-center items-center'>
                    <div className='bg-linear-to-r from-indigo-400 to-purple-400 rounded-full h-2 w-2 flex justify-center items-center'>
                        <div className='bg-linear-to-r from-indigo-500 to-purple-500 rounded-full h-1 w-1 flex justify-center items-center'>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent text-md'>New: AI-Powered Tools Available</p>
                </div>
            </div>

            <h1 className='text-7xl font-bold'>Supercharge Your</h1>
            <h1 className='text-7xl font-bold'>Digital Workflow</h1>

            <div className='text-gray-400'>
                <p>Access premium AI tools, design assets, templates, and productivity</p>
                <p>software—all in one place. Start creating faster today.</p>
                <p>Explore Products</p>
            </div>

            <div className='flex gap-8'>
                <button className='btn bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-lg text-white hover:scale-105 transition-all duration-400'>Explore Products</button>
                <button className='btn bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-all duration-400 border border-purple-500 px-5 rounded-full'>Explore Products</button>
            </div>
        </div>
    );
};

export default BannerLeft;