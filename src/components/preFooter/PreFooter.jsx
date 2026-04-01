import React from 'react';

const PreFooter = () => {
    return (
        <div className='bg-linear-to-r from-indigo-500 to-purple-500 w-full py-30'>
            <div className='w-11/12 md:w-10/12 text-white mx-auto text-center space-y-8'>
                <h1 className='text-5xl font-semibold'>Ready to Transform Your Workflow?</h1>
                <p className='text-gray-300 leading-4'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                <div className='flex gap-3 justify-center items-center'>
                    <button className='bg-white rounded-full btn'><h1 className='bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>Explore Products</h1></button>
                    <button className="btn border border-white rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white">View Pricing</button>
                </div>
                <p className='text-gray-300 leading-4'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default PreFooter;