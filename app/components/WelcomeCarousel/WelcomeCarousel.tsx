'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import {
   NextButton,
   PrevButton,
   usePrevNextButtons
} from '@/app/components/WelcomeCarousel/WelcomeCarouselArrowButtons';
import WelcomeCarouselOverlay from '@/app/components/WelcomeCarousel/WelcomeMessage';
import { fetchSlides, fetchOverlayContent  } from '@/app/utils/getCarouselData'
import { SlidesData, OverlayData} from '@/app/utils/types';
import '@/app/styles/WelcomeCarousel.css';

type PropType = {
   options?: EmblaOptionsType;
}


const WelcomeCarousel: React.FC<PropType> = (props) => {
   const { options } = props;
   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ playOnInit: true, delay: 4000 })]);
   const [slides, setSlides] = useState<SlidesData[]>([]);
   const [overlayContent, setOverlayContent] = useState<OverlayData | null>(null);
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

   useEffect(() => {
      const fetchData = async () => {
         const [slideData, overlayData] = await Promise.all([
            fetchSlides(),
            fetchOverlayContent(),
         ]);
         setSlides(slideData);
         setOverlayContent(overlayData);
      };
      fetchData();
   }, []);




   return (
      <div className="embla" id="carousel">
         <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
               {/*slides.map((index) => (
                  <div className="embla__slide" key={index}>
                     <Image
                     className="embla__slide__img"
                     src={`https://picsum.photos/1920/1080?v=${index}`}
                     fill={true}
                     sizes={'100vw'}
                     quality={100}
                     priority={true}
                     alt="Your alt text"
                     />
                  </div>
               ))*/}

               {slides.map((slide) => (
                  <div className="embla__slide" key={slide.id}>
                     <Image
                        src={slide.imageUrl}
                        alt={slide.title}
                        quality={100}
                        fill={true}
                        sizes={'100vw'}
                        className="embla__slide__img"
                     />
                  <div className="embla__overlay">
                     <h2>{slide.title}</h2>
                  </div>
                  </div>
               ))}

            </div>
         </div>

         {overlayContent && <WelcomeCarouselOverlay {...overlayContent} />}
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