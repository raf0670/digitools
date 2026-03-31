import React from 'react';

const ToolCard = ({ tool }) => {
    return (
        <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
                <div className='flex justify-end items-center'>
                    {
                        tool.tagType === "popular" ? <span className='text-xs px-1.5 pb-1 rounded-full bg-purple-200 text-purple-600'>{tool.tagType}</span> : tool.tagType === "new" ? <span className='text-xs px-1.5 pb-1 rounded-full bg-green-200 text-green-600'>{tool.tagType}</span> : <span className='text-xs px-1.5 pb-1 rounded-full bg-yellow-200 text-yellow-600'>{tool.tagType}</span>
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