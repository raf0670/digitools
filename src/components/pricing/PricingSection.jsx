import React from 'react';
import PricingOptions from './PricingOptions';

const PricingSection = () => {
    return (
        <div className='my-20 w-11/12 sm:w-10/12 mx-auto space-y-8'>
            <h1 className='text-5xl font-bold text-center'>Simple, Transparent Pricing</h1>
            <p className='text-gray-400 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <PricingOptions></PricingOptions>
        </div>
    );
};

export default PricingSection;