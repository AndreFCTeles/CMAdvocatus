export const fetchSlides = async () => {
   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/slides?_embed`
      );
      const slideData = await response.json();
      const slides = slideData.map((slide) => ({
         id: slide.id,
         title: slide.title.rendered,
         imageUrl:
            slide._embedded?.['wp:featuredmedia']?.[0].media_details?.sizes?.full?.source_url || `https://picsum.photos/1920/1080`,
      }))
      return slides;
   } catch (error) {
      console.error('Failed to fetch slides:', error);
      return [];
   }
};

export const fetchOverlayContent = async () => {
   try {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=cm-advocatus`
      );
      const overlayData = await response.json();

      if (overlayData.length === 0) return null;

      const page = overlayData[0];
      return {
         title: page.title.rendered,
         subtitle: page.acf?.sub || 'Default Subtitle',
         description: page.acf?.cont || 'Default Description',
         buttonText: page.acf?.btn_text || 'Learn More',
         buttonLink: page.acf?.btn_link || '#',
      };
   } catch (error) {
      console.error('Error fetching overlay content:', error);
      return null;
   }
};