import React from 'react'

const Wellcome = () => {
    return (
        <div dir='rtl' className='w-full flex flex-col items-center py-20'>
            <p className='font-normal text-[45px] lg:text-[85px] leading-[45pxpx] lg:leading-[85px] text-[rgba(36,36,36,1)] w-4/ text-center5'><span className='font-bold text-[45px] lg:text-[85px] leading-[45pxpx] lg:leading-[85px] text-[rgba(79,44,25,1)]'> قهوه</span> یادت نره!</p>
            <p className='w-4/5 font-[600] text-[16px] lg:text-xl text-center my-4'>بهترین و با کیفیت ترین قهوه ها و اکسسوری ها در خانه
                قهوه چالوس</p>
            <button className='w-[176px] lg:w-[188px] h-[48px] lg:h-[50px] rounded-[100px] bg-[rgba(176,162,123,1)] text-[18px] lg:text-[20px] font-medium text-white'>نمایش محصولات</button>
        </div>
    )
}

export default Wellcome
