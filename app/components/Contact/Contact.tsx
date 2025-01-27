import React from 'react'

const Contact: React.FC = () => {
   return (
      <div 
      id="agendar"
      className="
         w-full 
         bg-[url('https://picsum.photos/1920/1080')]
         bg-cover
         bg-fixed
      ">
         <div className="
            w-full 
            px-[20%] 
            py-[70px] 
            text-center 
            justify-center 
            justify-items-center
            imgOverlay
         ">
            <h2 className='text-white'>Contacte-nos</h2>
            <hr className="customDivider my-5" />

            <form className='pt-5'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <input type='text' placeholder='Nome Completo' className='p-3' />
                  <input type='email' placeholder='E-Mail' className='p-3' />
                  <input type='tel' placeholder='Telefone' className='p-3' />
                  <input type='date' className='p-3' />
               </div>
               <textarea placeholder='Notas' maxLength={1000} className='p-3 mt-5 w-full resize-y' />
               <button type='submit' className='w-full py-2 mt-5 text-white'>Contactar</button>
            </form>
         </div>
      </div>
   )
}

export default Contact