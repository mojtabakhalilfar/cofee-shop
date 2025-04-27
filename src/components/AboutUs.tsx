import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex items-center justify-center py-24'>
            <div className='flex flex-col sm:flex-row items-center w-[90%] justify-around'>
                <div className='relative w-[300px] sm:w-[307px] h-[513px] sm:h-[546px]'>
                    <img className='w-full h-full rounded-[8000px] border-[3px] border-[rgba(61,61,61,1)]' src="/assets/video.png" alt="معرفی" />
                    <img className='absolute top-[-15%] left-[-15%] sm:left-[110%] sm:top-[10%]' src="/assets/SVG2.png" alt="" />
                </div>
                <div className='flex flex-col items-center sm:w-[50%]
                '>
                    <h2 dir='rtl' className=' text-[33px] sm:text-[42px] leading-[67px] align-middle text-[rgba(36,36,36,1)]'>
                        <span className='font-[600px]'>خـــانه قـهــوه </span>
                        <span className='font-medium'>چـــالوس☕</span>
                    </h2>
                    <p dir='rtl' className='font-medium text-[18px] leading-[35px] align-middle text-[rgba(61,61,61,1)] text-right'>با بیش از ده سال تجربه در اداره کافه‌ها و رستوران‌ها، و پنج سال سابقه در عرصه‌ی آموزش و تولید و فروش قهوه، ما در زمینه‌ی خدمات قهوه به شما اطمینان می‌دهیم. تخصص ما در ترکیب بی‌نظیر علم قهوه با تجربه رستورانی، تجربه‌ی بی‌نظیری را برای شما ایجاد خواهیم کرد.</p>
                    <div className='flex items-center justify-end w-full mt-5'>
                        <button className='w-[132px] h-[48px] rounded-[100px] bg-[rgba(176,162,123,1)] font-[600px] text-[18px] leading-[18px] text-center align-middle text-white'>دربــاره مــا</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
