import React from "react";
import '@/app/styles/WelcomeMessage.css'
import {scrollPageToSection} from '@/app/utils/general'
import { OverlayData } from '@/app/utils/types';


const WelcomeCarouselOverlay: React.FC<OverlayData> = ({title, subtitle, description, buttonText, buttonLink}) => {

   return (
      <div className="message">
         <h2 className="text-[#ad9366] text-2xl md:text-5xl font-semibold tracking-wider">
            {subtitle}
         </h2>
         <hr className="customDivider mt-5" />
         <h1 className="pt-5 text-center text-5xl md:text-7xl xl:text-8xl font-bold tracking-wide">
            {title}
         </h1>
         <p className="pt-10 pb-14 text-center w-[50%] xl:w-[30%]">{description}</p>
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