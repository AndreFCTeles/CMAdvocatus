'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';
import { parsePostDate } from '@/app/utils/general';


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

const BlogPosts = () => {
   const { data, loading, error } = useQuery(GET_POSTS);

   const posts = data?.posts?.nodes || [];
   const nPosts = posts.length;

   return (
      <>
         {nPosts !== 0 && (
            <div
               id="blog"
               className="
               w-full 
               px-16
               pt:5
               md:pt-16
               justify-center
               justify-items-center
               items-center 
            ">

               <p className='text-sm text-neutral-500 pt-20'>BLOG</p>
               <h1 className="text-3xl pb-3 font-bold text-center">Artigos recentes</h1>

               <Link
                  href={`/blog`}
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
               ">Ver todos</Link>
               <hr className="customDivider mt-5 mb-10" />

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


                  {nPosts > 3 && posts.slice(0, 3).map((post) => {
                     let imageUrl = "https://picsum.photos/500/300"; // fallback image
                     if (post.featuredImage) {
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
                           <div className="px-2 md:px-5 py-2 md:py-5 max-w-[500px] max-h-[450px] transition-transform duration-1000 transform md:hover:scale-105 overflow-hidden">
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
      </>
   )
}

export default BlogPosts