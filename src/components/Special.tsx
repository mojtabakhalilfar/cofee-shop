"use client"
import React, { useState } from 'react'
import { Heart } from './Category'

interface IProduct {
    id: number,
    name: string,
    image: string,
    price: number,
    pricefinal: number,
    discount: number
}
const Special = ({ typecomponent }: { typecomponent: string }) => {
    const product: IProduct[] = [
        { id: 1000, name: "دانه قهوه اسپرسو‌ لِیدی روپل", image: "/assets/seed1.jpg", price: 168000, pricefinal: 148000, discount: 4 },
        { id: 1001, name: "دانه قهوه اسپرسو‌ دِیلی روپل", image: "/assets/seed2.jpg", price: 168000, pricefinal: 148000, discount: 8 },
        { id: 1002, name: "دانه قهوه اسپرسو جیورنو بن مانو", image: "/assets/seed3.jpg", price: 148000, pricefinal: 168000, discount: 12 },
        { id: 1003, name: "دانه قهوه اسپرسو ویتالی (بن مانو )", image: "/assets/seed4.jpg", price: 138000, pricefinal: 128000, discount: 7 },
    ]
    return (
        <div className='bg-[rgba(226,223,211,1)] w-full flex items-center justify-center'>
            <div className='flex flex-col items-center w-[90%]'>
                <Heart />
                <span className='font-[600px] text-3xl leading-[42px] text-center align-middle text-[rgba(79,44,25,1)]'>{typecomponent == "new" ? "جدید ترین محصولات" : "تخفیف دارها"}</span>
                <HeaderSpecial />
                <div className='flex items-center justify-center'>

                    <div className='w-full grid grid-cols-2 gap-x-4 sm:gap-32 sm:grid-cols-2 lg:grid-cols-4'>
                        {
                            product.map((items) => (
                                <div className='flex flex-col items-center w-full'>
                                    <div className='w-[169px] sm:w-[302px] aspect-square rounded-[5px] relative'>
                                        <img className='w-full aspect-square' src={items.image} alt={items.name} />
                                        <div className='w-[40px] sm:w-[50px] aspect-square rounded-[35px] bg-[rgba(176,162,123,1)] z-10 absolute top-[5%] right-[5%] flex justify-center items-center'>
                                            <span className=' font-bold text-[10px] text-white text-center align-middle leading-3'>{items.discount} %</span>
                                        </div>
                                    </div>
                                    <span className='block font-bold text-[12.5px] sm:text-[18px] leading-4 sm:leading-8 text-center align-middle my-2 sm:my-3 text-[rgba(51,51,51,1)]'>{items.name}</span>
                                    <div className='flex items-center justify-around w-full'>
                                        <span className='font-bold text-[16px] leading-8 text-center align-middle text-[rgba(176,162,123,1)]'>{items.pricefinal} تومان</span>
                                        <span className='font-medium text-[16px] leading-7 text-center align-middle text-[rgba(187,187,187,1)] line-through'>{items.price} تومان</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Special



interface IOptions {
    title: string,
    id: string
}

const HeaderSpecial = () => {
    const [selected, setSelected] = useState<string>()

    const options: IOptions[] = [
        { title: "انواع قهوه", id: "1" },
        { title: "انواع پودریجات", id: "2" },
        { title: "دریپ بک", id: "3" },
        { title: "سیروپ ها", id: "4" },
        { title: "انواع اکسسوری", id: "5" },
    ]
    return (
        <div className='w-full flex items-center justify-around overflow-auto lg:overflow-hidden mt-2 mb-6'>
            {options.map((items) => (
                <button onClick={() => setSelected(items.id)} className={`font-[600px] w-[190px] h-16 text-xl leading-6 align-middle mx-12 ${items.id == selected ? "text-[rgba(51,51,51,1)] border-b border-[rgba(176,162,123,1)]" : "text-[rgba(51,51,51,0.7)]"}`}>
                    {items.title}
                </button>
            ))}
        </div>
    )
}