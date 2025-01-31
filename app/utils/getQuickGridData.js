export const fetchQuickGrid = async () => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/quickgrid?_embed&per_page=3`
   );
   if (!response.ok) {
      throw new Error('Failed to fetch QuickGrid data');
   }

   const data = await response.json();
   return data.map((item) => ({
      id: item.id,
      title: item.title.rendered,
      description: item.acf?.description || '',
      buttonLink: item.acf?.btn_link || '',
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0].media_details?.sizes?.medium?.source_url || '',
   }));
};
