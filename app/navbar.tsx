'use client';
import React from 'react'; //, { useState } 
import Image from 'next/image';
import Link from 'next/link';

import './styles/navbar.css'

type NavLink = {
   label: string;
   targetId: string; // ID of the target section
};

type NavbarProps = {
   logo: string; // Path to the logo image
   links: NavLink[];
};

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
   const handleScroll = (targetId: string) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
         targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <nav className="navbar">
         <div className="navbar__logo">
            <a href="#top">
               <Image width={200} height={50} src={logo} alt="Logo" />
            </a>
         </div>
         <ul className="navbar__links">
            {links.map((link) => (
               <li key={link.targetId} className="navbar__link">
                  <button onClick={() => handleScroll(link.targetId)}>{link.label}</button>
               </li>
            ))}
            <Link href="/blog">
               Read Blog Posts
            </Link>
         </ul>
      </nav>
   );
};

export default Navbar;