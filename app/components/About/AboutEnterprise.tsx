import React from 'react'
import '@/app/styles/AboutEnterprise.css'

const AboutEnterprise: React.FC= () => {
   return (      
      <div 
      id="about"
      className="
         w-full
         pt-10
         min-h-[500px]
         grid
         grid-cols-1 
         md:grid-cols-2
      ">
         <div className="
            bg-center
            bg-cover
            bg-[url('https://picsum.photos/2000/')]
            bg-fixed
            w-full
         " />
         <div className='w-full p-16'>
            <h2 className='text-neutral-400 italic text-lg pb-5'>Quem somos</h2>
            <h1 className='font-black text-5xl pb-10'>CM ADVOCATUS</h1>
            <p>Phasellus lacus augue, molestie at sodales id, vestibulum a enim. Maecenas et sapien quis leo semper blandit. Vivamus vel nulla magna. Ut tempor eros ac lectus efficitur, quis aliquet lectus pellentesque. Vestibulum aliquam a diam non eleifend. Cras laoreet orci massa, eu commodo urna pulvinar sit amet. Ut ac laoreet leo, a vehicula turpis. Donec fermentum ultricies mattis. Donec tincidunt nisl eget est varius hendrerit. Integer at sem volutpat, ullamcorper diam sit amet, finibus lorem. Nullam et varius sem. Donec congue ac mi ut congue. Cras elit purus, aliquet at rhoncus ut, gravida sagittis enim. Phasellus iaculis, nibh sit amet tincidunt rutrum, arcu metus iaculis sapien, eu mollis risus ipsum id sapien. Vestibulum ac dignissim ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
         </div>
      </div>
   )
}

export default AboutEnterprise