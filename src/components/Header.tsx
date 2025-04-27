import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";

const Header = () => {
  return (
    <div className='w-full h-[82px] flex items-center justify-center' id='header'>
      <div className='w-[360px] sm:w-full h-full flex justify-between items-center px-2'>
        <div className='w-[35%] sm:w-2/5 sm:flex sm:justify-center'>

          <div className='aspect-square h-[40px]'>
            <div className='aspect-square w-[40px] relative sm:w-[100px] sm:h-[42px] sm:rounded-[42px] sm:bg-[rgba(176,162,123,1)] sm:flex sm:items-center sm:justify-around'>
              <p dir='rtl' className='font-bold text-xs left-3 align-middle text-white'>
                <span className='ml-2'>0</span>
                تومان
              </p>
              <AiOutlineShopping className='w-[20px] aspect-square sm:w-[20px] sm:aspect-square' />
              <div className='aspect-square w-[15px] absolute top-[20%] sm:top-0 left-[-10%] sm:left-0 bg-[rgba(176,162,123,1)] sm:bg-white rounded-[7.5px] flex justify-center items-center shadow-[0px_0px_4px_0px_rgba(0,0,0,0.17)]'>
                <span className='w-[5.37px] h-[14px] font-[1000] text-[9px] text-center align-middle text-white sm:text-[rgba(176,162,123,1)]'>0</span>
              </div>
            </div>
          </div>
          <button className='hidden sm:flex sm:items-center sm:justify-center border border-[rgba(0,0,0,0.106)] rounded-[42px] w-[156px] h-[42px] mx-2'>
            <span className='font-bold text-[14px] align-middle text-[rgba(51,51,51,1)]'>ورود / ثبت نام</span>
            <img className='w-[18.67px] aspect-square' src="/assets/Vector2.png" alt="" />
          </button>
          <button className='hidden sm:flex sm:items-center sm:justify-center border border-[rgba(0,0,0,0.106)] rounded-[42px] w-[42px] h-[42px]'>
            <img className='w-[18.67px] aspect-square' src="/assets/search.png" alt="" />
          </button>



        </div>

        <div className='flex lg:flex-row-reverse w-[65%] sm:w-3/5 justify-between sm:justify-center items-center'>
          <div>
            <img className="h-[40px] w-auto sm:ml-10" src="/assets/Logo.svg.png" alt="logo" />
          </div>
          <div>
            <GiHamburgerMenu className='w-[17px] h-[14px] lg:hidden' />
            <ul className='hidden sm:flex sm:flex-row-reverse sm:justify-baseline'>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>محصولات</li>
              <span className='hidden sm:block opacity-85'>|</span>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>درباره ما</li>
              <span className='hidden sm:block opacity-85'>|</span>
              <li className='font-bold text-base text-right align-middle uppercase text-[rgba(51,51,51,1)] mx-2'>تماس با ما</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
