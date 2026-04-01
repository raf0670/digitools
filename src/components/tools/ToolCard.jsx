import React, { useState } from 'react';
import tickMark from "../../assets/products/Vector.png";

const ToolCard = ({ tool, setSelectedTools }) => {
    const [isSelected, setIsSelected] = useState(false);
    const buyNowClick = () => {
        setIsSelected(true);
        setSelectedTools(prevTools => {
            const newTools = [...prevTools, tool];
            console.log(newTools);
            return newTools;
        });
    }

    return (
        <div className="card bg-base-100 shadow-lg h-full flex flex-col">
            <div className="card-body flex flex-col h-full">
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
                <div className='grow'>
                    <p className='text-gray-400'>{tool.description}</p>
                </div>
                <div className='grow'>
                    {
                        tool.price === 0 ? <p className='text-3xl font-semibold'>Free</p> : <p><span className='text-3xl font-semibold'>{tool.price}</span><span className='text-gray-400'>/{tool.period}</span></p>
                    }
                </div>
                <div className='grow'>
                    {
                        tool.features.map((feature, index) => {
                            return (
                                <p key={index} className='flex items-center gap-2'><span><img src={tickMark} alt="" /></span>{feature}</p>
                            )
                        })
                    }
                </div>
                <div className="mt-6">
                    {
                        isSelected ? <button onClick={buyNowClick} className="btn rounded-full btn-block text-black" disabled>Selected</button> : <button onClick={buyNowClick} className="btn rounded-full btn-block bg-linear-to-r from-indigo-500 to-purple-500 text-white">Buy Now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ToolCard;