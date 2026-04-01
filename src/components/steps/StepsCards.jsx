import React from 'react';
import Badge from './StepBadge';
import Img1 from "../../assets/products/user.png";
import Img2 from "../../assets/products/package.png";
import Img3 from "../../assets/products/rocket.png";

const StepsCards = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='relative shadow-lg px-5 h-90 bg-white rounded-2xl flex flex-col justify-center items-center gap-5'>
                <Badge number={1}></Badge>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img className='w-20' src={Img1} alt="" />
                    <h1 className='text-3xl font-semibold'>Create Account</h1>
                    <p className='text-gray-400 leading-4'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
            </div>
            <div className='relative shadow-lg px-5 h-90 bg-white rounded-2xl flex flex-col justify-center items-center gap-5'>
                <Badge number={2}></Badge>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img className='w-20' src={Img2} alt="" />
                    <h1 className='text-3xl font-semibold'>Choose Products</h1>
                    <p className='text-gray-400 leading-4'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
            </div>
            <div className='relative shadow-lg px-5 h-90 bg-white rounded-2xl flex flex-col justify-center items-center gap-5'>
                <Badge number={3}></Badge>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <img className='w-20' src={Img3} alt="" />
                    <h1 className='text-3xl font-semibold'>Start Creating</h1>
                    <p className='text-gray-400 leading-4'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default StepsCards;