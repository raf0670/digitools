import React from 'react';
import Heading from './Heading';
import StepsCards from './StepsCards';


const Steps = () => {
    return (
        <div className='bg-gray-50 py-30'>
            <div className='space-y-10 w-11/12 sm:w-10/12 mx-auto text-center'>
                <Heading></Heading>
                <StepsCards></StepsCards>
            </div>
        </div>
    );
};

export default Steps;