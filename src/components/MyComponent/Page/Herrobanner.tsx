import React from 'react';
import banner from '../../../assets/Adobe Express - file.png';
// import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import logo from '../../../assets/dologo.png'
import custom from '../../../assets/Fresh.png'


const Herrobanner = () => {
    return (
        <section className="bg-gradient-to-r from-gray-50 to-white pb-12 px-6 md:px-12 ">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">


                <div className="flex-1 text-center lg:text-left space-y-5 ">

                    <p className="inline-block bg-gray-200 text-gray-700 text-sm md:text-base px-5 py-1.5 rounded-full tracking-wide font-medium shadow-sm">
                        THE BEST GROCERY STORE
                    </p>


                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black ">
                        Make healthy life with <br />
                        <span className="text-primary">fresh grocery</span>
                    </h1>


                    <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                        Fresh. Halal. Delivered to your door. We care about what goes into your kitchen
                        for your better life and better health.
                    </p>


                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
                        <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-all duration-200">
                            Shop Now
                        </button>
                        <button className="border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary/10 transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>

                {/*  Image Section */}
                <div className="flex-1 pl-24 lg:pl-0 flex justify-center  lg:justify-end  relative">
                    <img
                        src={banner}
                        alt="Grocery Banner"
                        className="w-72 sm:w-96 lg:w-[500px] h-auto drop-shadow-xl  rounded-2xl "
                    />
               

                    <div className='w-40 md:w-52 bg-primary absolute top-[70%] right-[65%] md:right-[70%] lg:right-[80%] xl:right-[75%] flex gap-3 items-center py-2 rounded-md px-2 shadow-2xl hover:transition-all duration-300'>
                        <Avatar className="w-10 h-10 border-2 border-orange-400">
                            <AvatarImage src={logo} alt="logo" className="bg-white py-1 rounded-full" />
                        </Avatar>
                        <div>
                            <p className='text-primary-foreground font-medium text-xs lg:text-[16px]'>Fast Delivery</p>
                            <p className='text-[8px] md:text-[12px] text-gray-300'>Free of cose any delivery</p>
                        </div>
                    </div>
                    <div className='py-4 w-24 bg-primary absolute  top-[25%] right-[5%] sm:top-[30%] sm:right-[20%] flex items-center flex-col rounded-md shadow-lg'>
                        <Avatar className="w-10 h-10 border-2 border-orange-400">
                            <AvatarImage src={custom} alt="logo" className="bg-white py-1 rounded-full" />
                        </Avatar>
                         <div>
                          
                            <p className=' text-primary-foreground font-medium flex justify-center'>100%Fresh</p>
                            <p className='text-gray-300 font-medium text-[10px] flex justify-center'>Quality Measure</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Herrobanner;
