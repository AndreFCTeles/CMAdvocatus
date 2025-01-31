'use client';
import React from 'react';
import '@/app/styles/Footer.css';
import {scrollPageToSection} from '@/app/utils/general';
import { Contacts } from '@/app/utils/types';


const Footer: React.FC<Contacts> = ({tel, email, morada, links}) => {
   return (
      <div className='footerContainer text-white'>
         <div className='
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-0
            min-h-[300px]
            text-lg
         '>
            {/* CONTACTOS */}
            <div className='w-full h-full flex flex-col justify-between px-20 py-14' id='contactos'>
               <h1 className='font-bold tracking-widest text-2xl'>Contactos</h1>
               <p className='hero__data__contact shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' strokeWidth="1" stroke="currentColor" className="size-5 mr-2">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className='font-bold text-sm contact'>Morada:</span><span className='text-sm contact'>&nbsp;{morada}</span>
               </p>
               <p className='hero__data__contact m-0 md:mr-10 shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' strokeWidth="1" stroke="currentColor" className="size-5 mr-2">
                     <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  <span className='font-bold text-sm contact'>Telefone:</span><span className='text-sm contact'>&nbsp;{tel}</span>
               </p>
               <p className='hero__data__contact shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' strokeWidth="1" stroke="currentColor" className="size-5 mr-2">
                     <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                     <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  <span className='font-bold text-sm contact'>E-Mail:</span><span className='text-sm contact'>&nbsp;{email}</span>
               </p>
               <p>WIP - ícones redes sociais?</p>
            </div>
            
            {/* MAPA DO SITE */}
            <div className='w-full h-full flex flex-col justify-items-start px-20 py-14'>
               <h1 className='font-bold tracking-widest text-2xl'>Mapa do site</h1>
               <ul className="pt-3">
                  {links.map((link) => (
                     <li key={link.targetId} className="">
                        <button
                        className='bg-transparent hover:bg-transparent text-[#bfbfbf] hover:text-[#ad9366]'
                        onClick={() => scrollPageToSection(link.targetId)}>{link.label}</button>
                     </li>
                  ))}
               </ul>
            </div>
            
            {/* NEWSLETTER */}
            <div className='w-full h-full flex flex-col justify-between px-20 py-14'>
               <p>WIP - newsletter</p>
               <p>Decidir se necessário</p>
            </div>
         </div>

         <div id="footer" className='trueFooter h-[100px] border-t-[2px] border-neutral-700 p-10 text-center text-sm'>
            <p>© 2025 André Teles</p>
         </div>
      </div>
   )
}

export default Footer