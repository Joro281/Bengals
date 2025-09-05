'use client';

import { useState } from 'react';

interface ShellfishData {
  tagalog: string;
  english: string;
  image: string;
}

interface ShellfishNavigationContainerProps {
  shellfishData: ShellfishData[];
}

export default function ShellfishNavigationContainer({ shellfishData }: ShellfishNavigationContainerProps) {
  const [currentShellfishIndex, setCurrentShellfishIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(false);

  const currentShellfish = shellfishData[currentShellfishIndex];

  const goToPrevious = () => {
    setCurrentShellfishIndex((prevIndex) => 
      prevIndex === 0 ? shellfishData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentShellfishIndex((prevIndex) => 
      prevIndex === shellfishData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  const handleIndexChange = (index: number) => {
    setCurrentShellfishIndex(index);
  };

  const renderShellfishName = (shellfish: ShellfishData) => {
    if (isEnglish) {
      // English names
      switch (shellfish.english) {
        case "PRAWN":
          return <>PRA<span style={{ color: '#741714' }}>WN</span></>;
        case "SHRIMP":
          return <>SHR<span style={{ color: '#741714' }}>IMP</span></>;
        case "MUD CRAB":
          return <>MUD<span style={{ color: '#741714' }}> CRAB</span></>;
        case "BLUE CRAB":
          return <>BLUE<span style={{ color: '#741714' }}> CRAB</span></>;
        default:
          return shellfish.english;
      }
    } else {
      // Tagalog names
      switch (shellfish.tagalog) {
        case "SUGPO":
          return <>SUG<span style={{ color: '#741714' }}>PO</span></>;
        case "HIPON":
          return <>HIP<span style={{ color: '#741714' }}>ON</span></>;
        case "ALIMANGO":
          return <>ALI<span style={{ color: '#741714' }}>MANGO</span></>;
        case "ALIMASAG":
          return <>ALI<span style={{ color: '#741714' }}>MASAG</span></>;
        default:
          return shellfish.tagalog;
      }
    }
  };

  return (
    <>
      {/* Shellfish Navigation Container */}
      <div className="mt-8 border-4 border-black bg-cover bg-center relative min-h-48 md:min-h-64 lg:min-h-80 xl:min-h-96" style={{ backgroundImage: 'url(/images/ice.png)' }}>
        {/* Upper Left Rectangle */}
        <div className="absolute top-0 left-0 border-r-4 border-b-4 border-black bg-cover bg-center px-1 py-1 md:px-2 md:py-1 lg:px-3 lg:py-1 h-6 md:h-8 lg:h-10 flex items-center" style={{ backgroundImage: 'url(/images/background.png)' }}>
          <span className="font-special-elite font-bold text-sm md:text-2xl text-black cursor-pointer z-10 relative" onClick={handleLanguageToggle}>
            {renderShellfishName(currentShellfish)}
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
        
        {/* Centered Shellfish Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={currentShellfish.image} alt={isEnglish ? currentShellfish.english : currentShellfish.tagalog} className="w-3/4 h-3/4 object-contain" />
        </div>
      </div>
      
      {/* Dot Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {shellfishData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexChange(index)}
            className={`transition-all duration-200 border-2 ${
              index === currentShellfishIndex
                ? 'w-8 h-3 rounded-full'
                : 'w-3 h-3 rounded-full hover:scale-110'
            }`}
            style={{
              backgroundColor: index === currentShellfishIndex ? '#741714' : '#9ca3af',
              borderColor: '#000000'
            }}
            aria-label={`Go to shellfish ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
