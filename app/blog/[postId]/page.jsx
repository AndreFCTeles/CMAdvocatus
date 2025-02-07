import { getSinglePost } from "@/app/utils/getPosts";

const page = async ({ params }) => {
   const post = await getSinglePost(params.postId);
   if (!post) {
      return <div>Loading...</div>;
   }
   return (
      <div className="single-blog-page">
         <h2>{post.title.rendered}</h2>
         <div className="blog-post">
            <div className='py-5 text-neutral-500 text-lg w-[100%] h-[100%]' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
         </div>
      </div>
   );
};

export default page;