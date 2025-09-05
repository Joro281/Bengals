'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getActiveItem = () => {
    // If we're on a products sub-page, show PRODUCTS as active
    if (pathname.startsWith('/products')) {
      return navItems.find(item => item.href === '/products');
    }
    // Otherwise, find exact match
    return navItems.find(item => item.href === pathname);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  // Custom positioning for each category page
  const categoryPositioning: Record<string, { inset: string; width: string; height: string }> = {
    'WHOLEFISH': { inset: '-inset-8', width: 'w-[170%]', height: 'h-[200%]' },
    'MOLLUSKS': { inset: '-inset-7', width: 'w-[160%]', height: 'h-[200%]' },
    'CEPHALOPODS': { inset: '-inset-9', width: 'w-[160%]', height: 'h-[200%]' },
    'SHELLFISH': { inset: '-inset-7', width: 'w-[160%]', height: 'h-[200%]' }
  };

  return (
    <div className="md:hidden w-full">
      <div className="border-t-2 border-b-2 border-black">
        <button 
          className="w-full h-12 text-black font-bold flex items-center relative px-4"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          aria-haspopup="true"
        >
                     <span className={`font-special-elite absolute left-1/2 transform -translate-x-1/2 ${
             getActiveItem() ? 'text-lg text-[#741714]' : 'text-lg text-black'
           }`}>
                           {(() => {
                if (pathname.startsWith('/products') && pathname !== '/products') {
                  // Extract the category name from the path
                  const category = pathname.split('/')[2]?.toUpperCase() || '';
                  return (
                                         <div className="flex items-center space-x-2">
                                               <span>
                                                   <Link href="/products" className="text-black hover:text-[#741714] transition-colors">
                           PRODUCTS
                         </Link>
                        </span>
                       <span className="text-black">/</span>
                       <span className="relative">
                         {category}
                         {/* Scribble around the category name */}
                                                   <svg 
                            key={`category-${pathname}`}
                            className={`absolute ${categoryPositioning[category]?.inset || '-inset-9'} ${categoryPositioning[category]?.width || 'w-[160%]'} ${categoryPositioning[category]?.height || 'h-[200%]'} -right-full -top-1/2`}
                            viewBox="0 0 100 100" 
                            preserveAspectRatio="none"
                            style={{ zIndex: 50 }}
                          >
                            <path 
                              d={getActiveItem()?.scribble}
                              stroke="#741714" 
                              strokeWidth="4"
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
                       </span>
                     </div>
                  );
                }
                return getActiveItem()?.label || 'ABOUT';
              })()}
              {/* Scribble for main products page */}
              {pathname === '/products' && (
                <svg 
                  key="main-products"
                  className="absolute -inset-12 w-[300%] h-[300%] -left-full -top-full"
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                  style={{ zIndex: 50 }}
                >
                  <path 
                    d={getActiveItem()?.scribble}
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
              {/* Scribble for non-product pages */}
              {getActiveItem() && !pathname.startsWith('/products') && (
                <svg 
                  key={pathname}
                  className="absolute -inset-12 w-[300%] h-[300%] -left-full -top-full"
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                  style={{ zIndex: 50 }}
                >
                  <path 
                    d={getActiveItem()?.scribble}
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
          {isOpen ? (
            <ChevronUp className="w-5 h-5 absolute right-4" />
          ) : (
            <ChevronDown className="w-5 h-5 absolute right-4" />
          )}
        </button>
                 <div className={`${isOpen ? 'block' : 'hidden'}`}>
           {navItems.filter(item => {
             // If we're on a products sub-page, hide the PRODUCTS item from dropdown
             if (pathname.startsWith('/products') && item.href === '/products') {
               return false;
             }
             // Otherwise, hide the exact current path
             return item.href !== pathname;
           }).map((item) => (
             <Link key={item.href} href={item.href}>
               <div 
                 className="h-12 border-t border-b border-black flex items-center justify-center cursor-pointer"
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
                 <span className="font-special-elite text-base font-bold transition-all duration-300 text-black hover:text-[#741714] hover:text-lg">
                   {item.label}
                 </span>
               </div>
             </Link>
           ))}
         </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
