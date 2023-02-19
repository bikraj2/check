import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-row w-[1444px] h-[91px] space-x-24 justify-center items-center place-content-around mx-auto'>
      <div className='text-tC text-[24px] font-bold'> Brandname</div>
      <div className='another flex flex-row space-x-[240px] items-center'>
        <ul className='link flex flex-row space-x-[21px] text-sTc'>
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <div className='buttons flex flex-row space-x-[45px] items-center'>
          <h5>Login</h5>
          <div className=' flex w-[214px] h-[52px]'>
            <button className='btn  bg-pC  w-[132px] h-[52px]'>
              <p className='btn-text text-white '>JOIN US</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
