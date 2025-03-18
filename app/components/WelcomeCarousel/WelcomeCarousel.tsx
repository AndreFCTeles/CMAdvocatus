'use client'
import React from "react";
import Image from 'next/image';
import { gql, useQuery } from "@apollo/client";
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
import { SlidesData, GraphQLSlide} from '@/app/utils/types';
import '@/app/styles/WelcomeCarousel.css';

type PropType = {
   options?: EmblaOptionsType;
}

// GraphQL query to fetch slides/images
const GET_SLIDES = gql`
   query GetSlides {
      slides {
         nodes {
            featuredImage {
               node {
                  sizes
                  sourceUrl
               }
            }
            id
         }
      }
   }
`;

// GraphQL query to fetch overlay content
const GET_OVERLAY_CONTENT = gql`
   query GetOverlayContent {
      page(id: "/cm-advocatus/", idType: URI) {
         cMAdvocatusBoasVindas {
            titulo
            sub
            cont
            btnText
            btnLink
         }
      }
   }
`;


const WelcomeCarousel: React.FC<PropType> = (props) => {
   
   // Carousel controls
   const { options } = props;
   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade(), Autoplay({ playOnInit: true, delay: 4000 })]);
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

  // Apollo's useQuery hook for slides and overlay content
   const {
      data: slidesData,
      loading: slidesLoading,
      error: slidesError,
   } = useQuery(GET_SLIDES);
   const {
      data: overlayData,
      loading: overlayLoading,
      error: overlayError,
   } = useQuery(GET_OVERLAY_CONTENT);

   // Extract slide data
   const slides =
      slidesData?.slides?.nodes.map((slide: GraphQLSlide) => {
         let imageUrl = "https://picsum.photos/1920/1080"; // fallback
         if (
            slide.featuredImage &&
            slide.featuredImage.node &&
            slide.featuredImage.node.sourceUrl
         ) {
            imageUrl = slide.featuredImage.node.sourceUrl;
         }
         return {
            id: slide.id,
            title: slide.title,
            imageUrl,
         };
      }) || [];

   // Extract overlay content
   const page = overlayData?.page;
   const overlayContent = page
      ? {
         title: page.cMAdvocatusBoasVindas?.titulo || "Default Title",
         subtitle: page.cMAdvocatusBoasVindas?.sub || "Default Subtitle",
         description: page.cMAdvocatusBoasVindas?.cont || "Default Description",
         buttonText: page.cMAdvocatusBoasVindas?.btnText || "Learn More",
         buttonLink: page.cMAdvocatusBoasVindas?.btnLink || "#",
         }
      : null;




   return (
      <div className="embla" id="carousel">
         { (slidesLoading || overlayLoading ) ? ( 
            <div className="carouselLoader" /> 
         ) : (
               <>
                  <div className="embla__viewport" ref={emblaRef}>
                     <div className="embla__container">
                        {slides.map((slide: SlidesData) => (
                           <div className="embla__slide" key={slide.id}>
                              <Image
                                 src={slidesError ? 'https://picsum.photos/1920/1080' : slide.imageUrl}
                                 alt={"Erro ao carregar imagem"}
                                 quality={100}
                                 fill={true}
                                 sizes={'100vw'}
                                 className="embla__slide__img"
                              />
                              <div className="embla__overlay">
                                 <h2>{overlayError ? 'Erro ao carregar conteúdo' : slide.title}</h2>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  {overlayContent && <WelcomeCarouselOverlay {...overlayContent} />}
               </>
            )
         }
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