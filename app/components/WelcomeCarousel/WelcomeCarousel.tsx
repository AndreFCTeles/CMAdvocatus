'use client'
import React, { useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import '../../styles/WelcomeCarousel.css';
import {
   NextButton,
   PrevButton,
   usePrevNextButtons
} from './WelcomeCarouselArrowButtons';
import Image from 'next/image';

type PropType = {
   slides: number[];
   options?: EmblaOptionsType;
}


const WelcomeCarousel: React.FC<PropType> = (props) => {
   const { slides, options } = props;
   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ playOnInit: true, delay: 4000 })]);
   const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false);
   const autoplay = emblaApi?.plugins()?.autoplay;
   const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
   } = usePrevNextButtons(emblaApi, () => {
      autoplay?.stop();
      autoplay?.play();
   });

   useEffect(() => {
      if (!autoplay) return
      setAutoplayIsPlaying(autoplay.isPlaying())
      console.log(`autoplaying welcome carousel: ${autoplayIsPlaying?'yes':'no'}`)
      emblaApi.on('reInit', () => setAutoplayIsPlaying(autoplay.isPlaying()))
   }, [emblaApi, autoplay, autoplayIsPlaying]);


   return (
      <div className="embla">
         <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
               {slides.map((index) => (
                  <div className="embla__slide" key={index}>
                     <Image
                     className="embla__slide__img"
                     src={`https://picsum.photos/1920/1080?v=${index}`}
                     fill={true}
                     quality={100}
                     alt="Your alt text"
                     />
                  </div>
               ))}
            </div>
         </div>

         <div className="embla__controls">
            <div className="embla__buttons">
               <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
               <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
         </div>
      </div>
   );
}

export default WelcomeCarousel;