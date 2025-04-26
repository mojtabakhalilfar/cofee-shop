"use client"
import React, { useState } from 'react'
import { Heart } from './Category'

const Special = () => {
    return (
        <div className='bg-[rgba(226,223,211,1)] w-full flex items-center'>
            <div className='flex flex-col items-center w-[90%]'>
                <Heart />
                <span className='font-[600px] text-3xl leading-[42px] text-center align-middle text-[rgba(79,44,25,1)]'>جدیدترین محصولات</span>
                <HeaderSpecial />
            </div>
        </div>
    )
}

export default Special



interface IOptions{
    title : string , 
    id : string
}

const HeaderSpecial = () => {
    const [selected , setSelected]=useState<string>()

    const options:IOptions[] = [
        {title : "انواع قهوه", id:"1"},
        {title : "انواع پودریجات", id:"2"},
        {title : "دریپ بک", id:"3"},
        {title : "سیروپ ها", id:"4"},
        {title : "انواع اکسسوری", id:"5"},
    ]
    return (
        <div className='w-full flex items-center justify-around overflow-auto lg:overflow-hidden'>
            {options.map((items)=>(
                <button onClick={()=>setSelected(items.id)} className={`font-[600px] w-[110px] h-22 bg-red-400 text-xl leading-6 align-middle mx-12 ${items.id == selected ? "text-[rgba(51,51,51,1)] border-b leading-[21px] align-middle border-[rgba(176,162,123,1)]":"text-[rgba(51,51,51,0.7)]"}`}>{items.title}</button>
            ))}
        </div>
    )
}