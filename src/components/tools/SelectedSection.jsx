import React from 'react';
import SelectedCard from './SelectedCard';
import Empty from './Empty';

const SelectedSection = ({ selectedTools, setSelectedTools }) => {
    if (selectedTools.length === 0) {
        return (
            <Empty></Empty>
        );
    }

    const calculateTotalPrice = () => {
        let ret = 0;
        selectedTools.map(tool => {
            ret += tool.price;
        });
        return ret;
    }

    return (
        <div className='w-11/12 md:w-10/12 border border-gray-300 rounded-2xl p-10 space-y-8 mx-auto'>
            <h1 className='text-3xl font-semibold'>Your Cart</h1>
            <div className='space-y-5'>
                {
                    selectedTools.map(tool => <SelectedCard tool={tool} selectedTools={selectedTools} setSelectedTools={setSelectedTools}></SelectedCard>)
                }
            </div>
            <div className='flex justify-between'>
                <h3 className='text-gray-400'>Total:</h3>
                <h3 className='text-3xl font-semibold'>${calculateTotalPrice()}</h3>
            </div>
            <div>
                <button className='btn bg-linear-to-r from-indigo-500 to-purple-500 rounded-full w-full text-white'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default SelectedSection;