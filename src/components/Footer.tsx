import React from 'react'

interface IInfo {
    id: number,
    image: string,
    title: string,
    description: string
}

const Footer = () => {
    const info: IInfo[] = [
        { id: 1, image: "/assets/info1.png", title: "تماس", description: "091212345678" },
        { id: 1, image: "/assets/info2.png", title: "آدرس", description: "جاده چالوس ، رشت ، رادیو دریا 2" },
        { id: 1, image: "/assets/info3.png", title: "ساعات کاری", description: "8 صبح الی 11 شب" }
    ]
    return (
        <div className='bg-[rgba(51,51,51,1)] flex flex-col justify-center items-center relative'>
            <button className='w-[50px] aspect-square rounded-[25px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.17)] flex items-center justify-center absolute bottom-4 left-4'><img src="/assets/up.png" alt="" /></button>
            <div className='flex flex-col sm:flex-row-reverse items-end sm:justify-around border-b border-[rgba(82,82,82,1)] w-full my-6 pb-2'>
                {info.map((items) => (
                    <div className=' flex flex-row-reverse items-center px-4 my-3'>
                        <div className='w-[60px] sm:w-[70px] aspect-square rounded-[30px] sm:rounded-[35px] bg-[rgba(176,162,123,1)] flex items-center justify-center'>

                            <img className='w-[35px] aspect-square' src={items.image} alt={items.title} />
                        </div>
                        <div className='flex flex-col items-end mx-3 leading-[20px] align-middle text-white'>
                            <p className='font-[600] text-[18px] leading-[20px] align-middle text-white'>{items.title}</p>
                            <p className='font-medium text-[16px]'>{items.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mb-10 flex flex-col items-center sm:flex-row-reverse w-full sm:w-[90%]'>
                <div className='sm:w-[35%] flex items-center justify-center'>
                    <img className='w-[191px] h-[62px]' src="/assets/LogoWhite.png" alt="logo" />
                </div>
                <div className='w-[90%] sm:w-[40%] flex flex-row-reverse items-center justify-around my-4'>
                    <button className='font-medium text-[16px] leading-5 align-middle text-white'>محصولات</button>
                    <button className='font-medium text-[16px] leading-5 align-middle text-white'>درباره ما</button>
                    <button className='font-medium text-[16px] leading-5 align-middle text-white'>تماس با ما</button>
                </div>
                <div className='w-full sm:w-[35%] flex items-center justify-center'>
                    <img className='aspect-square w-[48px] rounded-[24px]' src="/assets/SymbolW.png" alt="whatsapp" />
                    <img className='aspect-square w-[48px] rounded-[24px] mx-4' src="/assets/SymbolI.png" alt="instagram" />
                    <img className='aspect-square w-[48px] rounded-[24px]' src="/assets/SymbolT.png" alt="telegram" />
                </div>
            </div>
            <div className='flex flex-col sm:flex-row-reverse sm:justify-around items-center w-[90%]'>
                <p className='w-[60%] font-medium text-[15px] left-6 text-center align-middle text-[rgba(161,161,161,1)] sm:text-right'>تمام حقوق این سایت متعلق به خانه قهوه چالوس
                    میباشد</p>
                <img className='aspect-square w-[64px] my-4' src="/assets/Enamad.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
