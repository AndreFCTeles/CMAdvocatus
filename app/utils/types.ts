export type NavLink = {
   label: string;
   targetId: string; 
};

export type Contacts = {
   tel: string;
   email: string;
   morada: string;
   links?: NavLink[];
}

export type SlidesData = {
   id: number;
   title: string;
   imageUrl: string;
}

export type GraphQLSlide = {
   id: string;
   title: string;
   featuredImage?: {
      node: {
         sizes?: string;
         sourceUrl: string;
         id: string;
      };
   } | null;
};

export type GraphQLCollab = {
   acercaEquipa: {
      cargo: string;
      desc: string;
      nome: string;
      foto?: {
         node: {
            sourceUrl: string;
         }
      }
   }
};

export type OverlayData = {
   title: string;
   subtitle: string;
   description: string;
   buttonText: string;
   buttonLink: string;
}

export type QuickGridItem = {
   id: number;
   title: string;
   description: string;
   icon: string;
   buttonLink: string;
   imageUrl: string;
};

export type AboutEnterpriseContent = {
   subTitle: string;
   title: string;
   content: string;
   bgImgUrl: string;
};

export type AboutTeamContent = {
   name: string;
   role: string;
   desc: string;
   imgUrl: string;
};


export type PostData = {
   id: string;
   title: string;
   date: string;
   content: string;
   excerpt: string;
   featuredImage?: {
      node: {
         sourceUrl: string;
      };
   };
   author: {
      node: {
         name: string;
      };
   };
};