import React from 'react';

const BannerBottom = () => {
    return (
        <div className='bg-linear-to-r from-indigo-500 to-purple-500 w-full py-16 my-24 text-white'>
            <div className='w-10/12 mx-auto text-center flex justify-evenly items-center flex-col md:flex-row'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold'>50K+</h1>
                    <p className='text-2xl font-semibold'>Active Users</p>
                </div>
                <div className="divider lg:divider-horizontal "></div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold'>200K+</h1>
                    <p className='text-2xl font-semibold'>Premium Tools</p>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold'>4.9</h1>
                    <p className='text-2xl font-semibold'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;