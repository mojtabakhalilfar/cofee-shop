import React from 'react'
import { Heart } from './Category'

interface IBrands {
    id: number,
    name: string,
    image: string
}

const Brands = () => {
    const brands:IBrands[] = [
        {id:1 , name:"lemm" , image : "/assets/brand1.jpg"},
        {id:1 , name:"griffon" , image : "/assets/brand2.jpg"},
        {id:1 , name:"tamkins" , image : "/assets/brand3.jpg"},
        {id:1 , name:"bonmano" , image : "/assets/brand4.jpg"},
        {id:1 , name:"alba" , image : "/assets/brand5.jpg"},
        {id:1 , name:"mont" , image : "/assets/brand6.jpg"},
        {id:1 , name:"xav" , image : "/assets/brand7.jpg"},
        {id:1 , name:"hayk" , image : "/assets/brand8.jpg"},
    ]
    return (
        <div className='w-full flex justify-center items-center mb-12'>
            <div className='w-[90%] flex flex-col items-center'>
                <Heart />
                <span className='font-bold text-[30px] sm:text-[36px] leading-[42px] sm:leading-[50px] align-middle text-[rgba(36,36,36,1)]'>برنده های مورد استفاده</span>
                <span className='font-[500] sm:font-bold text-[16px] sm:text-[18px] align-middle text-[rgba(61,61,61,1)] leading-[25px] mb-8'>بر اساس برند مورد علاقتان انتخاب کنید</span>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-20'>
                    {brands.map((items)=>(
                        <div className='w-[147px] h-[218px] rounded-[800px] border-[2px] border-[rgba(172,152,141,1)] flex flex-col items-center justify-around'>
                            <img className='aspect-square w-[113px] rounded-[100px]' src={items.image} alt={items.name} />
                            <span className='font-bold text-[25px] sm:text-[22px] leading-[56px] text-center align-middle uppercase'>{items.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
