'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductsThreeColumnLayoutProps {
  categories: string[];
}

export default function ProductsThreeColumnLayout({
  categories
}: ProductsThreeColumnLayoutProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const router = useRouter();

  const goToPrevious = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? categories.length - 1 : prevIndex - 1
      );
      setImageOpacity(1);
    }, 150);
  };

  const goToNext = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === categories.length - 1 ? 0 : prevIndex + 1
      );
      setImageOpacity(1);
    }, 150);
  };

  // Image mapping for each category
  const categoryImages: Record<string, string> = {
    "WHOLEFISH": "/images/products/categories/fish2.png",
    "MOLLUSKS": "/images/products/categories/mollusks.png",
    "CEPHALOPODS": "/images/products/categories/cephalopods.png", 
    "SHELLFISH": "/images/products/categories/shellfish.png"   
  };

  // Width mapping for each category's image
  const categoryWidths: Record<string, string> = {
    "WHOLEFISH": "w-11/20 md:w-11/20 lg:w-11/20 xl:w-11/20", 
    "MOLLUSKS": "w-1/3 md:w-2/5 lg:w-2/5 xl:w-2/5",  
    "CEPHALOPODS": "w-1/2 md:w-2/5 lg:w-2/5 xl:w-2/5", 
    "SHELLFISH": "w-9/20 md:w-9/20 lg:w-9/20 xl:w-9/20"   
  };

  // Top position mapping for each category's image
  const categoryTopPositions: Record<string, string> = {
    "WHOLEFISH": "50%",
    "MOLLUSKS": "48%",
    "CEPHALOPODS": "50%",
    "SHELLFISH": "50%"
  };

  // Left position mapping for each category's image
  const categoryLeftPositions: Record<string, string> = {
    "WHOLEFISH": "42%",
    "MOLLUSKS": "40%",
    "CEPHALOPODS": "42%",
    "SHELLFISH": "40%"
  };

  const getPreviousCategory = () => {
    return categories[currentIndex === 0 ? categories.length - 1 : currentIndex - 1];
  };

  const getNextCategory = () => {
    return categories[currentIndex === categories.length - 1 ? 0 : currentIndex + 1];
  };

  const navigateToCategory = (category: string) => {
    const categoryPath = category.toLowerCase();
    router.push(`/products/${categoryPath}`);
  };

  const renderCategoryName = (category: string) => {
    switch (category) {
      case "WHOLEFISH":
        return <>WHOLE<span style={{ color: '#741714' }}>FISH</span></>;
      case "MOLLUSKS":
        return <>MOLL<span style={{ color: '#741714' }}>USKS</span></>;
      case "CEPHALOPODS":
        return <>CEPHALA<span style={{ color: '#741714' }}>PODS</span></>;
      case "SHELLFISH":
        return <>SHELL<span style={{ color: '#741714' }}>FISH</span></>;
      default:
        return category;
    }
  };

  return (
    <div className="p-4">
      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-20 gap-8">
        
        {/* Left Column - Previous Category */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-4 p-4">
          {/* Top Section - 80% */}
          <div className="w-full h-4/5 flex flex-col items-center justify-center space-y-2">
            <img 
              src={categoryImages[getPreviousCategory()]}
              alt={getPreviousCategory()} 
              className="h-auto w-full max-w-full object-contain grayscale saturate-0 transition-all duration-300"
              style={{ maxHeight: '20vh' }}
            />
            <h3 className="font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-center">
              {renderCategoryName(getPreviousCategory())}
            </h3>
          </div>
          
          {/* Bottom Section - 20% */}
          <div className="w-full h-1/5">
            {/* Empty space */}
          </div>
        </div>

        {/* Center Column - TV with Current Category Navigation */}
        <div className="col-span-1 lg:col-span-14 flex flex-col items-center justify-center space-y-4 p-4">
          <div className="relative">
            {/* TV Image */}
            <img 
              src="/images/products/categories/tv.png" 
              alt="TV Display" 
              className="h-auto w-full max-w-full object-contain p-2"
              style={{ maxHeight: '90vh' }}
            />
            {/* Dynamic Image positioned inside TV screen based on category */}
            <img 
              src={categoryImages[categories[currentIndex]]}
              alt={`${categories[currentIndex]} on TV Screen`}
              className={`absolute w-2/5 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto object-contain p-1 ${categoryWidths[categories[currentIndex]]} transition-opacity duration-300 ease-in-out grayscale saturate-0 hover:grayscale-0 hover:saturate-100 cursor-pointer`}
              style={{ 
                top: categoryTopPositions[categories[currentIndex]],
                left: categoryLeftPositions[categories[currentIndex]],
                transform: 'translate(-50%, -50%)',
                opacity: imageOpacity
              }}
              onClick={() => navigateToCategory(categories[currentIndex])}
            />
          </div>
          
                     {/* Navigation Controls */}
           <div className="flex items-center justify-center space-x-4">
             <div className="cursor-pointer" onClick={goToPrevious}>
               <img 
                 src="/images/products/categories/left.png" 
                 alt="Previous" 
                 className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
               />
             </div>
             <p className="font-special-elite font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-black text-center leading-relaxed">
               {renderCategoryName(categories[currentIndex])}
             </p>
             <div className="cursor-pointer" onClick={goToNext}>
               <img 
                 src="/images/products/categories/right.png" 
                 alt="Next" 
                 className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
               />
             </div>
           </div>
        </div>

        {/* Right Column - Next Category */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center space-y-4 p-4">
          {/* Top Section - 80% */}
          <div className="w-full h-4/5 flex flex-col items-center justify-center space-y-2">
            <img 
              src={categoryImages[getNextCategory()]}
              alt={getNextCategory()} 
              className="h-auto w-full max-w-full object-contain grayscale saturate-0 transition-all duration-300"
              style={{ maxHeight: '20vh' }}
            />
            <h3 className="font-special-elite font-bold text-xs md:text-base lg:text-base text-black text-center">
              {renderCategoryName(getNextCategory())}
            </h3>
          </div>
          
          {/* Bottom Section - 20% - Category after next */}
          <div className="w-full h-1/5 flex flex-col items-center justify-center space-y-2 opacity-0">
            <img 
              src={categoryImages[getNextCategory() === "WHOLEFISH" ? "MOLLUSKS" : getNextCategory() === "MOLLUSKS" ? "CEPHALOPODS" : getNextCategory() === "CEPHALOPODS" ? "SHELLFISH" : "WHOLEFISH"]}
              alt="Category after next" 
              className="h-auto w-full max-w-full object-contain grayscale saturate-0 transition-all duration-300"
              style={{ maxHeight: '8vh' }}
            />
            <h3 className="font-special-elite font-bold text-xs text-black text-center">
              {getNextCategory() === "WHOLEFISH" && (
                <>MOLL<span style={{ color: '#741714' }}>USKS</span></>
              )}
              {getNextCategory() === "MOLLUSKS" && (
                <>CEPHALA<span style={{ color: '#741714' }}>PODS</span></>
              )}
              {getNextCategory() === "CEPHALOPODS" && (
                <>SHELL<span style={{ color: '#741714' }}>FISH</span></>
              )}
              {getNextCategory() === "SHELLFISH" && (
                <>WHOLE<span style={{ color: '#741714' }}>FISH</span></>
              )}
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}
