import React from 'react'

const Instagram = () => {
  return (
    <div className='w-full flex items-center justify-center py-14'>
      <div className=' flex flex-col sm:flex-row-reverse items-center sm:justify-between w-[90%] sm:w-[65%]'>
        <div className=' flex flex-col items-center'>
            <p className='font-medium text-[33px] leading-[67px] align-middle text-[rgba(36,36,36,1)]'><span className='font-[600] text-[rgba(176,162,123,1)]'>ایـنستـاگــرام </span>مـــا</p>
            <p className='font-[600] text-[33px] leading-[67px] align-middle text-[rgba(36,36,36,1)]'>@Coffeehouse_north</p>
        </div>
        <img className='w-340px h-[303px]' src="/assets/insta.png" alt="insta" />
      </div>
    </div>
  )
}

export default Instagram
