'use client';
import React from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import '@/app/styles/HeroContent.css'
import { scrollPageToSection } from "@/app/utils/general";

interface HeroProps {
   onBlog: boolean;
}

const GET_CONTACT_DATA = gql`
   query GetOverlayContentGetPosts {
      page(id: "/dados/", idType: URI) {
         dadosDeContacto {
            email
            tel
         }
      }
   }
`;

const HeroContent: React.FC<HeroProps> = ({ onBlog }) => {
   const { data, loading, error } = useQuery(GET_CONTACT_DATA);

   if (error) console.log("Error loading contact info:" +  error.message);

   // Extract and format contact data
   const dados = data?.page.dadosDeContacto;
   const formattedTel = dados?.tel
      ? dados.tel.toString().replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")
      : "xxx xxx xxx";

   return (
      <div className="hero md:h-[44px]">
         <div className='hero__data flex gap-x-5 flex-wrap'>
            <div className='hero__data__contact m-0 md:mr-10 shrink-0'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='currentColor' strokeWidth="1" stroke="currentColor" className="size-5 mr-2">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
               </svg>
               <span className='font-bold hidden sm:inline text-sm hero__data__contact__underlined'>Telefone:</span>{loading ? <div className="heroLoader" /> : <span className='font-medium text-sm'>&nbsp;{formattedTel}</span>}
            </div>
            <div className='hero__data__contact shrink-0'>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 mr-2">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
               </svg>
               <span className='font-bold hidden sm:inline text-sm hero__data__contact__underlined'>E-Mail:</span>{loading ? <div className="heroLoader" /> : <span className='font-medium text-sm'>&nbsp;{dados?.email || "Default E-Mail"}</span>}
            </div>
         </div>
         
         {!onBlog && (
            <button
               className="agendarLink py-3 px-10 hidden md:inline-block text-sm"
               onClick={() => scrollPageToSection("agendar")}
            >
               Agendar
            </button>
         )}
         {onBlog && (
            <Link
               className="agendarLink py-3 px-10 hidden md:inline-block text-sm"
               href="/#agendar"
            >
               Agendar
            </Link>
         )}
      </div>
   )
};

export default HeroContent;