'use client';
import React, { useState } from 'react'; //, { useState } 
import Image from 'next/image';
import {scrollPageToSection} from '@/app/utils/general';
import '@/app/styles/navbar.css'


type NavLink = {
   label: string;
   targetId: string; // ID of the target section
};

type NavbarProps = {
   logo: string; // Path to the logo image
   links: NavLink[];
};


const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
   const [nav, setNav] = useState(false);

   const showNav = () => {
      setNav(!nav);
   };


   return (
      <>
         <div className='navbar'>
            <div className="navbar__logo">
               <a onClick={() => {scrollPageToSection('carousel')}}>
                  <div className='flex content-center items-center'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#ad9366" className="size-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                     </svg>
                     <Image width={200} height={50} src={logo} alt="Logo" />
                  </div>
               </a>
            </div>

            {/* desktop nav */}
            <nav className="hidden md:flex">
               <ul className="navbar__links flex gap-[1.5rem]">
                  {links.map((link) => (
                     <li key={link.targetId} className="navbar__link">
                        <button onClick={() => scrollPageToSection(link.targetId)}>{link.label}</button>
                     </li>
                  ))}
                  {/*<Link href="/blog">Read Blog Posts</Link>*/}
               </ul>
            </nav>

            {/* hamburger */}
            {nav ? (
               // close button
               <svg 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               fill="currentColor" 
               className="fixed right-[30px] text-3xl z-50 md:hidden size-6"
               aria-hidden="true"
               onClick={showNav}>
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
               </svg>
            ) : (
               <svg 
               xmlns="http://www.w3.org/2000/svg"  
               viewBox="0 0 24 24" 
               fill="currentColor"
               className="fixed right-[30px] text-3xl z-50 md:hidden size-6"
               aria-hidden="true"
               onClick={showNav}>
                  <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
               </svg>
            )}

            {/* mobile nav */}
            <nav className={`
            fixed
            flex 
            flex-col 
            items-center 
            text-center
            md:hidden 
            z-40 
            duration-[300ms] 
            ease-in-out
            pb-[5%]
            left-0 
            w-full 
            top-[100px]
            ${
               nav ? 
               "bg-neutral-900 h-fit" //nav ? "right-[0px]" : "right-[-100vw]"
               : "h-0"
            }`}>
               <ul className={`
               navbar__links  
               gap-[1.5rem]
               flex-col  
               flex             
               duration-[300ms]
               ease-in-out
               ${nav ? "text-white z-40" : "text-[#00000000] z-[-5]"}`}>
                  {links.map((link) => (
                     <li key={link.targetId} className="navbar__link">
                        <button onClick={() => scrollPageToSection(link.targetId)}>{link.label}</button>
                     </li>
                  ))}
                  {/*<Link href="/blog" className={"duration-[300ms] ease-in-out" + (nav ? "text-white z-40" : "text-[#00000000] z-[-5]")}>
                     Read Blog Posts
                  </Link>*/}
               </ul>
            </nav>
         </div>
      </>
   );
};

export default Navbar;