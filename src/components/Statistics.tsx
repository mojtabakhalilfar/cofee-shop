import React from 'react'

interface IAmar{
    title: string,
    count : number | string
}
const Statistics = () => {
const amar:IAmar[]=[
    {title:"نوع قهوه" , count:"+100"},
    {title:"مشتری راضی" , count:"+1000"},
    {title:"شعبه" , count:"+3"},
    {title:"اکسسوری" , count:"+100"}
]

    return (
        <div className='flex items-center justify-center w-full h-[240px] relative'>
            <div style={{ backgroundImage: "url('/assets/Vector.png')" }} className="bg-contain bg-no-repeat bg-center flex items-center justify-center w-[80%] h-[240px]">
                <img className='h-[240px]' src="/assets/coffee.png" alt="coffee" />
                <div className='absolute bottom-[-250px] lg:bottom-[-155px] w-[340px] lg:w-[1000px] h-[270px] lg:h-[155px] rounded-[20px] bg-[url(/assets/backgroundeStatist.png)] p-4 lg:py-8 grid grid-cols-2 lg:grid-cols-4'>
                {amar.map((items)=>(
                    <div className='flex flex-col items-center'>
                        <span className='font-bold text-[50px] leading-[50px] text-[rgba(79,44,25,1)]'>{items.count}</span>
                        <span className='font-medium text-[25px] leading-[50px] text-[rgba(79,44,25,1)]'>{items.title}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Statistics
