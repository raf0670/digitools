import React from 'react';
import BannerImg from "../../../assets/products/banner.png";

const BannerRight = () => {
    return (
        <div className='shadow-2xl'>
            <img src={BannerImg} className='rounded-xl h-full w-200' alt="" />
        </div>
    );
};

export default BannerRight;