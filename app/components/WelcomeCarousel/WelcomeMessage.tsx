import React from "react";
import '@/app/styles/WelcomeMessage.css'
import {scrollPageToSection} from '@/app/utils/general'
import { OverlayData } from '@/app/utils/types';


const WelcomeCarouselOverlay: React.FC<OverlayData> = ({title, subtitle, description, buttonText, buttonLink}) => {

   return (
      <div className="message">
         <h2 className="text-[#ad9366] text-xl md:text-4xl font-medium tracking-wider uppercase">
            {subtitle}
         </h2>
         <hr className="customDivider mt-10 mb-10" />
         <h1 className="mt-7 text-center text-5xl md:text-7xl xl:text-8xl font-bold tracking-wide uppercase">
            {title}
         </h1>
         <p className="pt-5 pb-14 text-md font-slim text-center w-[90%] md:w-[60%] xl:w-[50%]">{description}</p>
         <button
         type="button"
         onClick={() => scrollPageToSection(buttonLink)}
         className="py-3 px-10"
         >
            {buttonText}
         </button>
      </div>
   );
};

export default WelcomeCarouselOverlay;