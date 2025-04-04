'use client';
import React from 'react';
import { useParams } from "next/navigation";
import Link from 'next/link';
import { gql, useQuery } from "@apollo/client";
import { parsePostDate } from '@/app/utils/general';
import { PostData } from '@/app/utils/types';
import HeroContent from '@/app/components/HeroContent/HeroContent';
import Navbar from '@/app/navbar';
import Footer from '@/app/components/Footer/Footer'


const GET_SINGLE_POST = gql`
   query GetSinglePost($id: ID!) {
      post(id: $id, idType: ID) {
         author {
            node {
               name
            }
         }
         date
         content
         featuredImage {
            node {
               sourceUrl
            }
         }
         title
         id
      }
   }
`;

const SinglePostPage: React.FC = () => {
   const params = useParams();
   const { postId } = params as { postId: string };
   const { data, loading, error } = useQuery(GET_SINGLE_POST, {
      variables: { id: postId },
   });

   if (loading) return <p>Loading...</p>;
   if (error || !data || !data.post) return <p>Error loading post.</p>;

   const post: PostData = data.post;
   console.log(post)
   const bgUrl =
      post.featuredImage?.node?.sourceUrl ||
      "https://picsum.photos/1920/1080";

   const navLinks = [
      { label: 'Home', targetId: 'carousel' },
      { label: 'Blog', targetId: 'blog' },
      { label: 'Acerca', targetId: 'acerca' },
      { label: 'A Equipa', targetId: 'acercaEquipa' },
   ];

   return (
      <div className="single-blog-page h-full">
         <div className="blog-post h-full">
            <div className='header__wrapper bg-white'>
               <HeroContent onBlog={true} />
               <Navbar links={navLinks} onBlog={true} />
            </div>
            <div key={post.id} className='w-full h-full'>

               <div>
                  <div
                     className="h-[500px]"
                     style={{
                        backgroundImage: `url(${bgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                     }}
                  />
                  <div className='sticky top-[108px] md:top-[132px] bg-white'><h3 className='py-10 px-20 text-7xl font-bold'>{post.title}</h3></div>
                  <p className='text-[#ad9366] text-md px-20'>{parsePostDate(post.date)}</p>
                  <p className='text-[#ad9366] text-sm px-20'>Por {post.author?.node?.name  || 'Autor desconhecido'}</p>
                  <div className='pt-5 text-neutral-500 text-lg w-full h-full px-20 pb-20' dangerouslySetInnerHTML={{ __html: post.content }} />
                  <div className='px-20 h-[100px] w-full bg-white sticky content-center top-[260px]'><Link href={"/blog"} className='blogBack align-middle px-5 py-2'>Voltar a blog</Link></div>
                  <div className='px-20 h-[100px] w-full bg-white sticky content-center top-[260px]'><Link href={"/"} className='blogBack align-middle px-5 py-2'>Voltar a início</Link></div>
                  <div
                     className="h-[300px] pb-5"
                     style={{
                        backgroundImage: `url(${bgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                     }}
                  />
               </div>

            </div>
         </div>
         <Footer links={navLinks} onBlog={true} />
      </div>
   );
};

export default SinglePostPage;