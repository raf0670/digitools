import React from 'react';
import BannerRight from './bannerRight/BannerRight';
import BannerLeft from './bannerLeft/BannerLeft';
import BannerBottom from './bannerBottom/BannerBottom';

const Banner = () => {
    return (
        <div className='py-14'>
            <div className='flex justify-between gap-14 w-10/12 mx-auto items-center flex-col-reverse md:flex-row'>
                <BannerLeft></BannerLeft>
                <BannerRight></BannerRight>
            </div>
            <BannerBottom></BannerBottom>
        </div>
    );
};

export default Banner;