export type NavLink = {
   label: string;
   targetId: string; 
};

export type Contacts = {
   tel: string;
   email: string;
   morada: string;
   links: NavLink[];
}

export type SlidesData = {
   id: number;
   title: string;
   imageUrl: string;
}

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