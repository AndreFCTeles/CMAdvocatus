export const getPosts = async () => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed`
   );
   const posts = await response.json();
   return posts;
}

export const getSinglePost = async (postId) => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${postId}`
   );
   const post = await response.json();
   return post;
};

export const parsePostDate = (postDate) => {
   const parsedDate = new Date(postDate);
   const parsedMonth = new Intl.DateTimeFormat("pt-PT", { month: "long" }).format(parsedDate.getMonth());
   const capitalizedMonth = parsedMonth.charAt(0).toUpperCase() + parsedMonth.slice(1);
   const dateString = `Publicado a ${parsedDate.getDay()} de ${capitalizedMonth} de ${parsedDate.getFullYear()}`;
   return dateString;
}