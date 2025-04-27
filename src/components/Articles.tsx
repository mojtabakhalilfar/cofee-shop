import React from 'react'
import { Heart } from './Category'
interface IArticle {
    id: number,
    image: string,
    title: string,
    descrption: string
}


const Articles = () => {
    const articles: IArticle[] = [
        {
            id: 1, image: "/assets/article1.png", title: "آشنایی با انواع مختلف قهوه ", descrption: `مقدمه:قهوه، یکی از محبوب‌ترین نوشیدنی‌های جهان، با طعم
و عطر خاص خود، انواع متعددی دارد. هر نوع قهوه دارای
مشخصات`},
        {
            id: 2, image: "/assets/article2.png", title: "خواص قهوه ، انرژی زا و آنتی اکسیدان", descrption: `“کشف خواص قهوه: از انرژی دهنده تا آنتی‌اکسیدان قوی”
مقدمه:قهوه، یکی از محبوب‌ترین نوشیدنی‌های جهان است که
علاوه بر طعم`},
        {
            id: 3, image: "/assets/article3.png", title: "چگونه قهوه خانگی درست کنیم؟", descrption: `راهنمای کامل آموزش درست کردن قهوه در خانه
مقدمه:قهوه‌ی یکی از محبوب‌ترین نوشیدنی‌های دنیاست و
بسیاری از افراد لذت می‌برند`},
    ]
    return (
        <div className='flex justify-center items-center bg-[rgba(226,223,211,1)] w-full'>
            <div className='flex flex-col items-center w-[95%]'>
                <Heart />
                <span className='font-bold text-[32px] leading-[42px] text-center align-middle text-[rgba(36,36,36,1)]'>مقالات آموزشی</span>
                <span className='font-medium text-[16px] leading-[25px] text-center align-middle text-[rgba(61,61,61,1)] mb-4'>مقالات و آموزش های خانه قهوه چالـــوس</span>
                {/* <div className='flex sm:flex-row-reverse items-center justify-around sm:h-auto w-full overflow-x-scroll'> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
                    {articles.map((items) => (
                        <div className='flex flex-col items-center justify-around bg-[rgba(235,235,220,1)] rounded-t-[20px] '>
                            <img className='rounded-t-[20px] w-full h-[266px] sm:h-[272px]' src={items.image} alt={items.title} />
                            <div className='flex flex-col items-end w-full px-2'>
                                <span className='font-[600] text-[21px] leading-[29px] text-right align-middle text-[rgba(36,36,36,1)]'>{items.title}</span>
                                <span className='font-medium text-[14px] leading-[21px] text-right align-middle text-[rgba(119,119,119,1)]'>{items.descrption}</span>
                            </div>

                            <div dir='rtl' className='flex items-start w-full mt-8 mb-2 px-2'>
                                <button className='font-bold text-[16px] align-middle text-[rgba(176,162,123,1)]'>ادامه مطلب »</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles
