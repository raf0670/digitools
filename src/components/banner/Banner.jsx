import React from 'react';
import BannerRight from './bannerRight/BannerRight';
import BannerLeft from './bannerLeft/BannerLeft';

const Banner = () => {
    return (
        <div className='flex justify-between gap-14 flex-col-reverse md:flex-row w-10/12 mx-auto items-center'>
            <BannerLeft></BannerLeft>
            <BannerRight></BannerRight>
        </div>
    );
};

export default Banner;