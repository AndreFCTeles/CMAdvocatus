export const scrollPageToSection = (ele) => {
   const element = document.getElementById(ele);
   const offset = 130;
   const elementPosition = element.getBoundingClientRect().top;
   const offsetPosition = elementPosition + window.scrollY - offset;

   window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
   });
}



export const hideUrl = (url) => {
   document.location = url;
   return false;
}