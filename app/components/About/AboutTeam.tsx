import React from 'react'
import Image from 'next/image';

type PropType = {
   colab: number[];
}

const AboutTeam: React.FC<PropType> = (props) => {
   const {colab} = props;
   return (
      <div 
      id="acercaEquipa"
      className='
         p-10
         grid
         grid-cols-1 
         md:grid-cols-2
         xl:grid-cols-3
         gap-10
      '>
         {colab.map((index) => (
            <div key={index} className="h-96 relative">
               <Image
               className="block w-full h-full object-cover"
               src={`https://picsum.photos/1920/1080?v=${index}`}
               fill={true}
               quality={100}
               priority={true}
               alt="Your alt text"
               />
               <div className='absolute bottom-0 flex w-full px-5 justify-center text-center'>
                  <div className='absolute flex flex-col bg-white w-[80%] z-5 p-7 translate-y-[-80%] justify-center text-center'>
                     <h2>colab {index}</h2>
                     <p className='text-sm text-neutral-500 pt-3'>Lorem Ipsum</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default AboutTeam