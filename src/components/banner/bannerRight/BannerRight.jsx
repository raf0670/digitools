import React from 'react';
import BannerImg from "../../../assets/products/banner.png";

const BannerRight = () => {
    return (
        <div className='shadow-2xl'>
            <img src={BannerImg} className='rounded-xl h-full w-200 hover:scale-105 transition-all duration-500' alt="" />
        </div>
    );
};

export default BannerRight;