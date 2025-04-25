import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <div className='w-full h-[82px] flex items-center justify-center'>
      <div className='w-[360px] lg:w-full h-full bg-red-100 flex justify-between items-center px-2'>
        <div className='w-[35%] lg:w-2/5 lg:flex lg:justify-center'>

          <div className='aspect-square h-[40px]'>
            <div className='aspect-square w-[30px] relative'>
              <AiOutlineShopping className='w-full h-full' />
              <div className='aspect-square w-[15px] absolute top-[-10px]'>
                <span className=''>0</span>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex border border-[rgba(0,0,0,0.106)] rounded-[42px] w-[156px] h-[42px] mx-2'></div>
          <div className='hidden lg:flex border border-[rgba(0,0,0,0.106)] rounded-[42px] w-[42px] h-[42px]'></div>



        </div>

        <div className='flex lg:flex-row-reverse w-[65%] lg:w-3/5 justify-between lg:justify-center items-center'>
          <div>
            <img className="h-[40px] w-auto lg:ml-10" src="/assets/Logo.svg.png" alt="logo" />
          </div>
          <div>
            <GiHamburgerMenu className='w-[17px] h-[14px] lg:hidden' />
            <ul className='hidden lg:flex lg:flex-row-reverse lg:justify-baseline'>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>محصولات</li>
              <span className='hidden lg:block opacity-85'>|</span>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>درباره ما</li>
              <span className='hidden lg:block opacity-85'>|</span>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>تماس با ما</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
