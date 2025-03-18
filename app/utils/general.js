export const scrollPageToSection = (ele) => {
   const element = document.getElementById(ele);
   const offset = 130;
   const elementPosition = element.getBoundingClientRect().top;
   const offsetPosition = elementPosition + window.scrollY - offset;

   window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
   });
};



export const hideUrl = (url) => {
   document.location = url;
   return false;
};


export const parsePostDate = (postDate) => {
   const parsedDate = new Date(postDate);
   const parsedMonth = new Intl.DateTimeFormat("pt-PT", { month: "long" }).format(parsedDate.getMonth());
   const capitalizedMonth = parsedMonth.charAt(0).toUpperCase() + parsedMonth.slice(1);
   const dateString = `Publicado a ${parsedDate.getDay()} de ${capitalizedMonth} de ${parsedDate.getFullYear()}`;
   return dateString;
}