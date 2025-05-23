import Link from 'next/link'
import React from 'react'

interface ICategory{
    id : string , 
    title : string , 
    image : string
}

const Category = () => {
    const category: ICategory[] = [
        {id:"category1",title:"دانه قهوه",image:"/assets/seed.png"},
        {id:"category2",title:"پودریجات",image:"/assets/powder.png"},
        {id:"category3",title:"دریپ بک",image:"/assets/drip.jpg"},
        {id:"category4",title:"سیروپ",image:"/assets/syrup.jpg"},
        {id:"category5",title:"اکسسوری",image:"/assets/accessory.jpg"},
    ]

    return (
        <div className='flex justify-center items-center w-full'>

            <div className='flex flex-col items-center w-[85%]'>
                <Heart />
                <div className='flex items-center'>
                    <span className='flex-1 border-t border-gray-300'></span>
                    <span className='font-bold text-3xl leading-[42px] text-[rgba(36,36,36,1)] mx-2'>دسته بندی محصولات</span>
                    <span className='flex-1 border-t border-gray-300'></span>
                </div>
                <p className='w-[85%] font-bold text-[16px] text-center align-middle leading-[25px] my-4'>بهترین و باکیفیت ترین برند ها ، چون شما لایق
                    بهترین ها هستید</p>
                <div className='flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-row justify-around items-center'>
                    {category.map((items)=>(
                        <div className='w-[340px] sm:w-[220px] h-[72px] sm:h-[87px] rounded-[800px] bg-[rgba(226,223,213,1)] my-2 sm:mx-2 flex justify-between items-center px-4'>
                            <Link href="#" className='w-[30px] aspect-square flex items-center justify-center'><img className='w-[12.5px] aspect-square sm:hidden' src="/assets/arrow.png" alt="" /></Link>
                            <div className='flex items-center'>
                                <span className='font-bold text-[24px] leading-[42px] align-middle mr-4'>{items.title}</span>
                                <img className='aspect-square w-[50px] rounded-[100px]' src={items.image} alt={items.title} />
                            </div>                         
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Category

export const Heart = () => {
    return (
        <div className='relative py-10'>
            <img className=' absolute bottom-0 aspect-square w-5' src="/assets/coffeeBeans.png" alt="heart" />
            <img className='rotate-[60deg] absolute bottom-0 aspect-square w-5' src="/assets/coffeeBeans.png" alt="heart" />
        </div>
    )
}