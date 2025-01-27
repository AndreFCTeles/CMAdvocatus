import React from "react";
import '@/app/styles/WelcomeMessage.css'
import {scrollPageToSection} from '@/app/utils/general'


const WelcomeCarouselOverlay: React.FC = () => {

   return (
      <div className="message">
         {/*<div className="divide-y divide-[#ad9366] text-center">*/}
            <h2 className="text-[#ad9366] text-2xl md:text-5xl font-semibold tracking-wider">Welcome</h2>
            <hr className="customDivider mt-5" />
            <h1 className="pt-5 text-center text-5xl md:text-7xl xl:text-8xl font-bold tracking-wide">CM Advocatus</h1>
         {/*</div>*/}
         <p className="pt-10 pb-14 text-center w-[50%] xl:w-[30%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <button type="button" onClick={() => scrollPageToSection('contactos')} className="py-3 px-10">Contactar</button>
      </div>
   );
};

export default WelcomeCarouselOverlay;