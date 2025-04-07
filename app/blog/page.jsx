'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';
import { parsePostDate } from '@/app/utils/general';
import HeroContent from '@/app/components/HeroContent/HeroContent';
import Navbar from '@/app/navbar';
import Footer from '@/app/components/Footer/Footer';


const GET_POSTS = gql`
   query GetPosts {
      posts {
         nodes {
            id
            title
            date
            excerpt
            featuredImage {
               node {
                  mediaDetails {
                     sizes {
                        width
                        sourceUrl
                     }
                  }
               }
            }
            author {
               node {
                  name
               }
            }
         }
      }
   }
`;

const BlogPage = () => {
   const { data, loading, error } = useQuery(GET_POSTS);

   const posts = data?.posts?.nodes || [];
   const nPosts = posts.length;
   const navLinks = [
      { label: 'Home', targetId: 'carousel' },
      { label: 'Blog', targetId: 'blog' },
      { label: 'Acerca', targetId: 'acerca' },
      { label: 'A Equipa', targetId: 'acercaEquipa' },
   ];

   return (
      <>
         <div className='header__wrapper'>
            <HeroContent onBlog={true} />
            <Navbar links={navLinks} onBlog={true} />
         </div>
         {nPosts !== 0 && (
            <div
               id="blog"
               className="
               w-full 
               px-16 
               pt-24
               justify-center
               justify-items-center
               items-center 
            ">

               <p className='text-lg text-neutral-500 pt-20'>BLOG</p>
               <h1 className="text-6xl pb-7 font-bold text-center">Todos os artigos</h1>

               <Link
                  href={`/`}
                  className="
                  px-4
                  text-sm 
                  text-[#ad9366] 
                  hover:text-white 
                  border-2 
                  rounded-sm   
                  border-white 
                  hover:border-[#ad9366] 
                  hover:bg-[#ad9366] 
                  transition-colors
               ">Voltar a início</Link>

               <hr className="customDivider my-10" />

               <div className={`
                  p-5    
                  w-full    
                  h-full
                  grid
                  grid-cols-1 
                  md:${nPosts <= 2 ? 'grid-cols-' + nPosts : 'grid-cols-2'}
                  xl:${nPosts <= 3 ? 'grid-cols-' + nPosts : 'grid-cols-3'}
                  gap-10
               `}>

                  {posts.map((post) => {
                     let imageUrl = "https://picsum.photos/500/300";
                     if (
                        post.featuredImage
                     ) {
                        const sizesObj = post.featuredImage.node.mediaDetails.sizes;
                        const mediumSizeObj = Object.values(sizesObj).find(
                           (size) => size.width === "300"
                        );
                        if (mediumSizeObj && mediumSizeObj.sourceUrl) {
                           imageUrl = mediumSizeObj.sourceUrl;
                        }
                     }

                     return (
                        <div key={post.id} className="w-full h-full overflow-hidden">
                           <div className="p-5 max-w-[500px] max-h-[450px] transition-transform duration-1000 transform md:hover:scale-105 overflow-hidden">
                              <Link href={`/blog/${post.id}`} className="post">
                                 <div className="overflow-y-hidden max-h-[200px]">
                                    <Image
                                       src={imageUrl}
                                       alt={`Imagem do post ${post.id}`}
                                       width={500}
                                       height={500}
                                    />
                                 </div>
                                 <h3 className="pt-5 pb-2 text-3xl font-bold truncate">{post.title}</h3>
                                 <p className="text-[#ad9366] text-xs">{parsePostDate(post.date)}</p>
                                 <p className="text-[#ad9366] text-xs">
                                    Por {post.author && post.author.node ? post.author.node.name : 'Autor desconhecido'}
                                 </p>
                                 <div
                                    className="my-3 text-neutral-500 text-sm line-clamp-4"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                 />
                              </Link>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         )}
         <Footer links={navLinks} onBlog={true} />
      </>
   )
}

export default BlogPage;