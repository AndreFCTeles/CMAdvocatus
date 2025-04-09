'use client';
import React from 'react';
import { gql, useQuery } from "@apollo/client";

const GET_ACERCA_DATA = gql`
   query GetAcerca {
      page(id: "/acerca-empresa/", idType: URI) {
         acercaEmpresa {
            imagem {
               node {
                  sourceUrl
               }
            }
            titulo
            textoconteudo
            subtitulo
         }
      }
   }
`;

const AboutEnterprise: React.FC = () => {
   const { data, loading, error } = useQuery(GET_ACERCA_DATA);
   if (loading) {console.log("loading");}
   if (error) {console.log("error loading about data");}

   const dados = data?.page.acercaEmpresa;
   const imgUrl = dados?.imagem
      ? dados.imagem.node.sourceUrl
      : 'https://picsum.photos/1920/1080';
   
   return (
      <>
         {data && (
            <div
            id="acerca"
            className="
               w-full
               pt-5
               md:pt-10
               grid
               grid-cols-1
               md:grid-cols-2
            ">
               <div 
               className="bg-center bg-cover bg-fixed w-full" 
               style={{ backgroundImage: `url(${imgUrl})`}} 
               />
               <div className='w-full p-5 md:p-16'>
                  <h2 className='text-neutral-400 italic text-lg pb-5 uppercase'>{dados.subTitulo}</h2>
                  <h1 className='font-black text-5xl pb-10 uppercase'>{dados.titulo}</h1>
                  <p className='text-sm text-neutral-600 md:pr-16 xl:pr-28' dangerouslySetInnerHTML={{ __html: dados.textoconteudo }} />
               </div>
            </div>
         )}
      </>
   )
}

export default AboutEnterprise