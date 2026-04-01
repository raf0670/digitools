import React from 'react';

const SelectedCard = ({ tool, setSelectedTools }) => {
    const removeClick = () => {
        setSelectedTools(currentTools => {
            const newTools = currentTools.filter(currentTool => currentTool !== tool);
            return newTools;
        });
    }

    return (
        <div className='bg-gray-100 p-5 rounded-3xl flex items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={tool.icon} alt="" />
                <div>
                    <h3>{tool.name}</h3>
                    <p className='text-gray-500'>${tool.price}</p>
                </div>
            </div>
            <div>
                <button onClick={removeClick} className='btn bg-gray-200 rounded-full text-red-500 hover:scale-105 transition-all duration-300'>Remove</button>
            </div>
        </div>
    );
};

export default SelectedCard;