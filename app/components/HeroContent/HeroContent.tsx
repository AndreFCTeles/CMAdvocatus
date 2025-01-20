'use client'
import React from "react";
import './../../styles/HeroContent.css'



const TEL = 'xxx xxx xxx'
const EMAIL = 'xxx-xxx@xxx.xx'

const HeroContent: React.FC = () => {
   return (
      <div className="hero">
         <div className='hero__data flex gap-x-5'>
            <p className='hero__data__contact m-0 md:mr-10 shrink-0'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2">
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
               </svg>
               <span className='font-bold hidden sm:inline'>Telefone:</span>&nbsp;{TEL}
            </p>
            <p className='hero__data__contact shrink-0'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
               </svg>
               <span className='font-bold hidden sm:inline'>E-Mail:</span>&nbsp;{EMAIL}
            </p>
         </div>
         
         <button className="py-5 px-10 hidden md:inline-block">test</button>
      </div>
   )
};

export default HeroContent;