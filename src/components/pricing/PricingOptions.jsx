import React from 'react';
import tickMark from "../../assets/products/Vector.png";

const PricingOptions = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div className='bg-gray-100 shadow-sm px-5 py-5 rounded-2xl flex flex-col justify-center gap-5'>
                <div className='flex flex-col grow gap-2'>
                    <h1 className='text-3xl font-semibold'>Starter</h1>
                    <p className='text-gray-500 leading-4'>Perfect for getting started</p>
                    <p className='text-gray-400 leading-4'><span className='text-4xl text-black font-semibold'>$0</span>/Month</p>
                </div>
                <div className='grow'>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Access to 10 free tools</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Basic templates</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Community support</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>1 project per month</p>
                </div>
                <button className="btn rounded-full btn-block bg-linear-to-r from-indigo-500 to-purple-500 text-white">Get Started Free</button>
            </div>
            <div className='relative bg-linear-to-r from-indigo-500 to-purple-500 shadow-sm px-5 py-5 rounded-2xl flex flex-col justify-center gap-5'>
                <div className='flex items-center justify-center'>
                    <span className='text-xs px-1.5 pb-1 rounded-full bg-yellow-200 text-yellow-600 absolute -top-2.5'>Most Popular</span>
                </div>
                <div className='flex flex-col grow gap-2'>
                    <div className='text-white'>
                        <h1>Pro</h1>
                        <p>Best for professionals</p>
                        <p><span className='text-4xl font-semibold'>$29</span>/Month</p>
                    </div>
                </div>
                <div className='grow'>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Access to all premium tools</p>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Unlimited templates</p>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Priority support</p>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Unlimited projects</p>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Cloud sync</p>
                    <p className='flex gap-3 items-center text-white'><span><img className='' src={tickMark} alt="" /></span>Advanced analytics</p>
                </div>
                <button className='bg-white rounded-full btn w-full'><h1 className='bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>Start Pro Trial</h1></button>
            </div>
            <div className='bg-gray-100 shadow-sm px-5 py-5 rounded-2xl flex flex-col justify-center gap-5'>
                <div className='flex flex-col grow gap-2'>
                    <h1 className='text-3xl font-semibold'>Starter</h1>
                    <p className='text-gray-500 leading-4'>Perfect for getting started</p>
                    <p className='text-gray-400 leading-4'><span className='text-4xl text-black font-semibold'>$0</span>/Month</p>
                </div>
                <div className='grow'>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Everything in Pro</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Team collaboration</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Custom integrations</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Dedicated support</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>SLA guarantee</p>
                    <p className='flex gap-3 items-center text-gray-500'><span><img src={tickMark} alt="" /></span>Custom branding</p>
                </div>
                <button className="btn rounded-full btn-block bg-linear-to-r from-indigo-500 to-purple-500 text-white">Get Started Free</button>
            </div>
        </div>
    );
};

export default PricingOptions;