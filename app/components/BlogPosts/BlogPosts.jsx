import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts, parsePostDate } from '@/app/utils/getPosts'

const BlogPosts = async () => {
   const posts = await getPosts();
   const nPosts = posts.length;

   return (
      <>
         {posts.length !== 0 && (
            <div
               id="blog"
               className="
               w-full 
               px-16 
               pt-16
               justify-center
               justify-items-center
               items-center 
            ">

               <p className='text-sm text-neutral-500 pt-20'>BLOG</p>
               <h1 className="text-3xl pb-7 font-bold">Artigos recentes</h1>

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

                  {posts.slice(0, 3).map((post) => (
                     <div key={post.id} className='w-full h-full overflow-hidden'>
                        <div className='
                     p-5
                        w-full 
                        transition-transform 
                        duration-1000 
                        transform 
                        md:hover:scale-105
                     '>
                           <Link href={`/blog/${post.id}`} className="post">
                              <div className='overflow-y-hidden max-h-[200px]'>
                                 {post._embedded['wp:featuredmedia'] && (
                                    <Image
                                       src={post._embedded['wp:featuredmedia'][0].media_details?.sizes?.medium?.source_url}
                                       alt={post.title.rendered}
                                       width={500}
                                       height={500}
                                    />
                                 )}

                              </div>
                              <h3 className='pt-5 text-3xl font-bold truncate'>{post.title.rendered}</h3>
                              <p className='text-[#ad9366] text-sm'>{parsePostDate(post.date)}</p>
                              <p className='text-[#ad9366] text-sm'>Por {post._embedded?.author?.[0]?.name || 'Autor desconhecido'}</p>
                              <div className='py-5 text-neutral-500 text-lg' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </>
   )
}

export default BlogPosts