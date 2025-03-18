'use client';
import React from 'react';
import Image from 'next/image';
import { gql, useQuery } from "@apollo/client";
import { GraphQLCollab } from '@/app/utils/types';


const GET_COLLAB_DATA = gql`
   query GetCollabs {
      colaboradores {
         nodes {
            acercaEquipa {
               cargo
               desc
               nome
               foto {
                  node {
                     sourceUrl
                  }
               }
            }
         }
      }
   }
`;

const AboutTeam: React.FC = () => {
   const { data, loading, error } = useQuery(GET_COLLAB_DATA);
   if (loading) {console.log("loading");}
   if (error) {console.log("error loading collab data");}

   const dados = data?.colaboradores.nodes;
   const mdGridColsClass = 
   dados && dados.length < 2 
      ? `md:grid-cols-${dados.length}`
      : 'md:grid-cols-2';
   const xlGridColsClass =
   dados && dados.length < 3
      ? `xl:grid-cols-${dados.length}`
      : 'xl:grid-cols-3';

   return (
      <div 
      id="acercaEquipa"
      className={`
         py-10
         px-[10%]
         grid
         grid-cols-1 
         ${mdGridColsClass} 
         ${xlGridColsClass} 
         gap-10
         justify-items-center
      `}>
         {dados && (dados.map((collab:GraphQLCollab, index: number) => (
            <div 
            key={"collab"+index} 
            className="h-96 relative w-full min-w-[300px] max-w-[500px]">
               <Image
               className="block w-full h-full object-cover"
               src={collab.acercaEquipa.foto ? collab.acercaEquipa.foto.node.sourceUrl : "https://picsum.photos/800"}
               fill={true}
               quality={100}
               priority={true}
               alt={"Fotografia em falta"}
               />
               <div className='absolute bottom-0 flex w-full px-5 justify-center text-center'>
                  <div className='absolute flex flex-col bg-white w-[80%] z-5 p-7 translate-y-[-80%] justify-center text-center'>
                     <h2>{collab.acercaEquipa.nome}</h2>
                     <p className='text-sm text-neutral-500 pt-3'>{collab.acercaEquipa.cargo}</p>
                     <p className='text-sm pt-3'>{collab.acercaEquipa.desc}</p>
                  </div>
               </div>
            </div>
         )))}
      </div>
   )
}

export default AboutTeam