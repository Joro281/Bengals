'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import ShellfishCrossword from '../../components/shellfish/ShellfishCrossword';
import ShellfishCrosswordClues from '../../components/shellfish/ShellfishCrosswordClues';
import ShellfishNavigationContainer from '../../components/shellfish/ShellfishNavigationContainer';

export default function ShellfishPage() {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    mussels: '',
    talaba: '',
    sugpo: '',
    scallop: '',
    lobster: '',
    alimasag: ''
  });

  // Shellfish Data - Add/Change/Modify your shellfish data here
  const shellfishData = [
    { 
      tagalog: "SUGPO", 
      english: "PRAWN", 
      image: "/images/products/shellfish/prawn.png" 
    },
    { 
      tagalog: "HIPON", 
      english: "SHRIMP", 
      image: "/images/products/shellfish/shrimp.png" 
    },
    { 
      tagalog: "ALIMANGO", 
      english: "MUD CRAB", 
      image: "/images/products/shellfish/alimango.png" 
    },
    { 
      tagalog: "ALIMASAG", 
      english: "BLUE CRAB", 
      image: "/images/products/shellfish/alimasag.png" 
    }
  ];

  const handleCrosswordReset = () => {
    setCrosswordAnswers({
      mussels: '',
      talaba: '',
      sugpo: '',
      scallop: '',
      lobster: '',
      alimasag: ''
    });
    
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      if (input instanceof HTMLInputElement) {
        input.value = '';
      }
    });
  };

  return (
    <div className="min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="max-w-7xl mx-auto border-b-4 border-l-4 border-r-4 border-black">
          <div className="p-8">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Header and Description */}
              <div className="text-left p-6">
                <h1 className="font-special-elite font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-4">
                SHELL<span style={{ color: '#741714' }}>FISH</span>
                </h1>
                <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed ">
                  From trusted fisheries to your table—fresh Sugpo, Hipon, Alimango, and Alimasag, perfect for restaurants, markets, and seafood lovers.
                </p>
                
                <ShellfishNavigationContainer shellfishData={shellfishData} />
              </div>
              
              {/* Right Column - Clean Grid */}
              <div className="hidden lg:block">
                <ShellfishCrossword onAnswersChange={setCrosswordAnswers} />
              </div>
            </div>
            
            {/* Crossword Clues - Below the 2-column layout */}
            <div className="hidden lg:block">
              <ShellfishCrosswordClues crosswordAnswers={crosswordAnswers} onReset={handleCrosswordReset} />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

