import React from 'react';
import tickMark from "../../assets/products/Vector.png";

const ToolCard = ({ tool }) => {

    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <div className='flex justify-between items-center relative'>
                    <div className='border border-gray-300 rounded-full h-fit w-fit p-3'>
                        <img src={tool.icon} alt="" />
                    </div>
                    {
                        tool.tagType === "popular" ? <span className='text-xs px-1.5 pb-1 rounded-full bg-purple-200 text-purple-600 absolute top-1 right-0'>{tool.tagType}</span> : tool.tagType === "new" ? <span className='text-xs px-1.5 pb-1 rounded-full bg-green-200 text-green-600 absolute top-1 right-0'>{tool.tagType}</span> : <span className='text-xs px-1.5 pb-1 rounded-full bg-yellow-200 text-yellow-600 absolute top-1 right-0'>{tool.tagType}</span>
                    }
                </div>
                <div>
                    <h2 className='text-3xl font-semibold'>{tool.name}</h2>
                </div>
                <div>
                    <p className='text-gray-400'>{tool.description}</p>
                </div>
                <div>
                    {
                        tool.price === 0 ? <p className='text-3xl font-semibold'>Free</p> : <p><span className='text-3xl font-semibold'>{tool.price}</span><span className='text-gray-400'>/{tool.period}</span></p>
                    }
                </div>
                <div>
                    {
                        tool.features.map((feature, index) => {
                            return (
                                <div key={index}>
                                    <p className='flex items-center gap-2'><span><img src={tickMark} alt="" /></span>{feature}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="mt-6">
                    <button className="btn rounded-full btn-block bg-linear-to-r from-indigo-500 to-purple-500 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;