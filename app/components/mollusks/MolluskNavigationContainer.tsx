'use client';

import { useState } from 'react';

interface MolluskData {
  tagalog: string;
  english: string;
  image: string;
}

interface MolluskNavigationContainerProps {
  molluskData: MolluskData[];
}

export default function MolluskNavigationContainer({ molluskData }: MolluskNavigationContainerProps) {
  const [currentMolluskIndex, setCurrentMolluskIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(false);

  const currentMollusk = molluskData[currentMolluskIndex];

  const goToPrevious = () => {
    setCurrentMolluskIndex((prevIndex) => 
      prevIndex === 0 ? molluskData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentMolluskIndex((prevIndex) => 
      prevIndex === molluskData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  const handleIndexChange = (index: number) => {
    setCurrentMolluskIndex(index);
  };

  const renderMolluskName = (mollusk: MolluskData) => {
    if (isEnglish) {
      // English names
      switch (mollusk.english) {
        case "MUSSEL":
          return <>MUS<span style={{ color: '#741714' }}>SEL</span></>;
        case "OYSTER":
          return <>OYS<span style={{ color: '#741714' }}>TER</span></>;
        case "CLAM":
          return <>CL<span style={{ color: '#741714' }}>AM</span></>;
        case "SCALLOP":
          return <>SCAL<span style={{ color: '#741714' }}>LOP</span></>;
        default:
          return mollusk.english;
      }
    } else {
      // Tagalog names
      switch (mollusk.tagalog) {
        case "TAHONG":
          return <>TAH<span style={{ color: '#741714' }}>ONG</span></>;
        case "TALABA":
          return <>TAL<span style={{ color: '#741714' }}>ABA</span></>;
        case "HALAAN":
          return <>HAL<span style={{ color: '#741714' }}>AAN</span></>;
        case "SCALLOP":
          return <>SCAL<span style={{ color: '#741714' }}>LOP</span></>;
        default:
          return mollusk.tagalog;
      }
    }
  };

  return (
    <>
      {/* Mollusk Navigation Container */}
      <div className="mt-8 border-4 border-black bg-cover bg-center relative min-h-48 md:min-h-64 lg:min-h-80 xl:min-h-96" style={{ backgroundImage: 'url(/images/ice.png)' }}>
        {/* Upper Left Rectangle */}
        <div className="absolute top-0 left-0 border-r-4 border-b-4 border-black bg-cover bg-center px-1 py-1 md:px-2 md:py-1 lg:px-3 lg:py-1 h-6 md:h-8 lg:h-10 flex items-center" style={{ backgroundImage: 'url(/images/background.png)' }}>
          <span className="font-special-elite font-bold text-sm md:text-2xl text-black cursor-pointer z-10 relative" onClick={handleLanguageToggle}>
            {renderMolluskName(currentMollusk)}
          </span>
          <div className="ml-2 flex items-center space-x-1 z-20 relative">
            {isEnglish ? (
              <img 
                src="/images/tagalog.png" 
                alt="Tagalog" 
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200" 
                onClick={handleLanguageToggle}
              />
            ) : (
              <img 
                src="/images/english.png" 
                alt="English" 
                className="w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200" 
                onClick={handleLanguageToggle}
              />
            )}
          </div>
        </div>
        
        {/* Upper Right Navigation Buttons */}
        <div className="absolute top-0 right-0 flex z-10">
          <button onClick={goToPrevious} className="border-l-4 border-b-4 border-black bg-cover bg-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center transition-all duration-200 hover:shadow-lg cursor-pointer z-20" style={{ backgroundImage: 'url(/images/background.png)' }}>
            <span className="font-amarante text-lg md:text-3xl lg:text-4xl transition-colors duration-200 hover:text-red-800" style={{ color: '#741714' }}>&lt;</span>
          </button>
          <button onClick={goToNext} className="border-l-4 border-b-4 border-black bg-cover bg-center w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex items-center justify-center transition-all duration-200 hover:shadow-lg cursor-pointer z-20" style={{ backgroundImage: 'url(/images/background.png)' }}>
            <span className="font-amarante text-lg md:text-3xl lg:text-4xl transition-colors duration-200 hover:text-red-800" style={{ color: '#741714' }}>&gt;</span>
          </button>
        </div>
        
        {/* Centered Mollusk Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={currentMollusk.image} alt={isEnglish ? currentMollusk.english : currentMollusk.tagalog} className="w-1/2 h-1/2 object-contain" />
        </div>
      </div>
      
      {/* Dot Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {molluskData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexChange(index)}
            className={`transition-all duration-200 border-2 ${
              index === currentMolluskIndex
                ? 'w-8 h-3 rounded-full'
                : 'w-3 h-3 rounded-full hover:scale-110'
            }`}
            style={{
              backgroundColor: index === currentMolluskIndex ? '#741714' : '#9ca3af',
              borderColor: '#000000'
            }}
            aria-label={`Go to mollusk ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
