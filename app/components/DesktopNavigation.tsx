'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

const DesktopNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      href: '/about', 
      label: 'ABOUT',
      scribble: "M20,50 Q20,20 45,20 Q70,20 80,50 Q80,80 50,80 Q25,80 20,50"
    },
    { 
      href: '/products', 
      label: 'PRODUCTS',
      scribble: "M15,45 Q15,15 50,15 Q85,15 85,45 Q85,75 50,75 Q15,75 15,45"
    },
    { 
      href: '/contact', 
      label: 'CONTACT',
      scribble: "M25,50 Q25,25 40,25 Q60,25 75,50 Q75,75 50,75 Q35,75 25,50"
    },
    { 
      href: '/order', 
      label: 'ORDER',
      scribble: "M20,50 Q20,20 50,20 Q80,20 80,50 M80,50 Q80,80 50,80 Q20,80 20,50"
    }
  ];

  return (
    <>
      {navItems.map((item, index) => {
        const isActive = item.href === '/products' ? pathname.startsWith('/products') : pathname === item.href;
        const isFirst = index === 0;
        const isLast = index === navItems.length - 1;
        return (
          <div key={item.href} className="hidden md:block w-full md:w-1/4">
            <Link href={item.href}>
              <div 
                className="h-12 md:h-16 p-2 md:p-4 relative cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`Navigate to ${item.label} page`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.location.href = item.href;
                  }
                }}
              >
                <div className={`absolute top-0 h-1 bg-black ${isFirst ? 'left-0' : 'left-[5%]'} ${isLast ? 'right-0' : 'right-[5%]'}`}></div>
                <div className={`absolute bottom-0 h-1 bg-black ${isFirst ? 'left-0' : 'left-[5%]'} ${isLast ? 'right-0' : 'right-[5%]'}`}></div>
                <div className="flex items-center justify-center h-full">
                  <span className={`${specialElite.className} font-bold transition-all duration-300 relative ${
                    isActive 
                      ? 'text-base md:text-lg text-[#741714]' 
                      : 'text-base md:text-lg text-black hover:text-[#741714] hover:text-lg md:hover:text-xl'
                  }`}>
                    {item.label}
                                         {isActive && (
                       <svg 
                         key={`${item.href}-${pathname}`}
                         className="absolute -inset-12 w-[300%] h-[300%] -left-full -top-full"
                         viewBox="0 0 100 100" 
                         preserveAspectRatio="none"
                         style={{ zIndex: 50 }}
                       >
                         <path 
                           d={item.scribble}
                           stroke="#741714" 
                           strokeWidth="6"
                           fill="none" 
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           style={{
                             strokeDasharray: "200",
                             strokeDashoffset: "200",
                             animation: "scribble 1.2s ease-out forwards"
                           }}
                         />
                       </svg>
                     )}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default DesktopNavigation;
