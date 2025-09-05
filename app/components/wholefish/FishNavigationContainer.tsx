'use client';

import { useState } from 'react';

interface FishData {
  tagalog: string;
  english: string;
  image: string;
}

interface FishNavigationContainerProps {
  fishData: FishData[];
}

export default function FishNavigationContainer({ fishData }: FishNavigationContainerProps) {
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const [isEnglish, setIsEnglish] = useState(false);

  const currentFish = fishData[currentFishIndex];

  const goToPrevious = () => {
    setCurrentFishIndex((prevIndex) => 
      prevIndex === 0 ? fishData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentFishIndex((prevIndex) => 
      prevIndex === fishData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLanguageToggle = () => {
    setIsEnglish(!isEnglish);
  };

  const handleIndexChange = (index: number) => {
    setCurrentFishIndex(index);
  };

  const renderFishName = (fish: FishData) => {
    if (isEnglish) {
      // English names
      switch (fish.english) {
        case "MILKFISH":
          return <>MILK<span style={{ color: '#741714' }}>FISH</span></>;
        case "TILAPIA":
          return <>TILA<span style={{ color: '#741714' }}>PIA</span></>;
        case "SARDINES":
          return <>SARD<span style={{ color: '#741714' }}>INES</span></>;
        case "ROUNDSCAD":
          return <>ROUND<span style={{ color: '#741714' }}>SCAD</span></>;
        default:
          return fish.english;
      }
    } else {
      // Tagalog names
      switch (fish.tagalog) {
        case "BANGUS":
          return <>BAN<span style={{ color: '#741714' }}>GUS</span></>;
        case "TILAPIA":
          return <>TILA<span style={{ color: '#741714' }}>PIA</span></>;
        case "TAMBAN":
          return <>TAM<span style={{ color: '#741714' }}>BAN</span></>;
        case "GALUNGGONG":
          return <>GALUNG<span style={{ color: '#741714' }}>GONG</span></>;
        default:
          return fish.tagalog;
      }
    }
  };

  return (
    <>
      {/* Fish Navigation Container */}
      <div className="mt-8 border-4 border-black bg-cover bg-center relative min-h-48 md:min-h-64 lg:min-h-80 xl:min-h-96" style={{ backgroundImage: 'url(/images/ice.png)' }}>
        {/* Upper Left Rectangle */}
        <div className="absolute top-0 left-0 border-r-4 border-b-4 border-black bg-cover bg-center px-1 py-1 md:px-2 md:py-1 lg:px-3 lg:py-1 h-6 md:h-8 lg:h-10 flex items-center" style={{ backgroundImage: 'url(/images/background.png)' }}>
          <span className="font-special-elite font-bold text-sm md:text-2xl text-black cursor-pointer z-10 relative" onClick={handleLanguageToggle}>
            {renderFishName(currentFish)}
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
        
        {/* Centered Fish Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={currentFish.image} alt={isEnglish ? currentFish.english : currentFish.tagalog} className="w-1/2 h-1/2 object-contain" />
        </div>
      </div>
      
      {/* Dot Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        {fishData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexChange(index)}
            className={`transition-all duration-200 border-2 ${
              index === currentFishIndex
                ? 'w-8 h-3 rounded-full'
                : 'w-3 h-3 rounded-full hover:scale-110'
            }`}
            style={{
              backgroundColor: index === currentFishIndex ? '#741714' : '#9ca3af',
              borderColor: '#000000'
            }}
            aria-label={`Go to fish ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
