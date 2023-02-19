import React from 'react';
import image from '../assets/first.svg';
import Navbar from './navbar';
const Intro = () => {
  return (
    <div className='w-screen h-[777px] bg-sc'>
      <Navbar />
      <div className='h-[682px] grid grid-cols-2 gap-[30px] justify-center items-center'>
        <div className='flex flex-col space-y-7 w-[532px] mx-auto '>
          <h5 className='text-pC'>Welcome</h5>
          <h1>Best Learning Opportunities</h1>
          <h4 className='text-sTc'>
            Our goal is to make online education work for everyone
          </h4>
          <div className='flex flex-row space-x-[10px] h-[52px]'>
            <button className='btn bg-pC w-[133px] text-white'>
              <div className='btn-text'>Join us</div>
            </button>
            <button className='btn w-[162px] border-2 text-pC border-pC'>
              <div className='btn-text'>Learn More</div>
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt='' className='mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Intro;
