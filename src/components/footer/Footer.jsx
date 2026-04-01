import React from 'react';
import fb from "../../assets/Facebook.png";
import insta from "../../assets/Instagram.png";
import tweet from "../../assets/Twitter.png";

const Footer = () => {
    return (
        <div className='bg-[#101727] w-full pt-30 pb-8 text-gray-300'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pb-20 gap-12 border-b border-gray-700'>
                    <div className='space-y-5 md:col-span-2'>
                        <h1 className='text-4xl font-bold text-white'>DigiTools</h1>
                        <p className='leading-5'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-xl font-semibold text-white'>Products</h3>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-xl font-semibold text-white'>Company</h3>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-xl font-semibold text-white'>Resources</h3>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className='space-y-5'>
                        <h3 className='text-xl font-semibold text-white'>Social Links</h3>
                        <div className='flex gap-3'>
                            <img src={fb} alt="" className='h-8 w-8' />
                            <img src={insta} alt="" className='h-8 w-8' />
                            <img src={tweet} alt="" className='h-8 w-8' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center pt-8'>
                    <div>
                        <p>© 2026 Digitools. All rights reserved.</p>
                    </div>
                    <div className='flex gap-10 flex-col md:flex-row'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;