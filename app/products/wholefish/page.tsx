'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import CrosswordPuzzle from '../../components/wholefish/CrosswordPuzzle';
import CrosswordClues from '../../components/wholefish/CrosswordClues';
import FishNavigationContainer from '../../components/wholefish/FishNavigationContainer';

export default function WholeFishPage() {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    bangus: '',
    dalag: '',
    tuna: '',
    market: '',
    icebox: '',
    seafood: ''
  });

  const fishData = [
    { 
      tagalog: "BANGUS", 
      english: "MILKFISH", 
      image: "/images/products/wholefish/bangus.png" 
    },
    { 
      tagalog: "TILAPIA", 
      english: "TILAPIA", 
      image: "/images/products/wholefish/tilapia.png" 
    },
    { 
      tagalog: "TAMBAN", 
      english: "SARDINES", 
      image: "/images/products/wholefish/sardines.png" 
    },
    { 
      tagalog: "GALUNGGONG", 
      english: "ROUNDSCAD", 
      image: "/images/products/wholefish/scad.png" 
    }
  ];

  const handleCrosswordAnswersChange = (answers: typeof crosswordAnswers) => {
    setCrosswordAnswers(answers);
  };

  const handleCrosswordReset = () => {
    setCrosswordAnswers({
      bangus: '',
      dalag: '',
      tuna: '',
      market: '',
      icebox: '',
      seafood: ''
    });
    
    // Clear all input fields in the crossword grid
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
                  WHOLE<span style={{ color: '#741714' }}>FISH</span>
                </h1>
                <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed ">
                  We offer freshly sourced whole fish from General Santos, ranging from everyday staples to premium catches, all delivered with guaranteed freshness.
                </p>
                
                <FishNavigationContainer fishData={fishData} />
              </div>
              
              {/* Right Column - Crossword Puzzle */}
              <div className="hidden lg:block">
                <CrosswordPuzzle 
                  crosswordAnswers={crosswordAnswers}
                  onAnswersChange={handleCrosswordAnswersChange}
                />
              </div>
            </div>
            
            {/* Crossword Clues - Below the 2-column layout */}
            <div className="hidden lg:block">
              <CrosswordClues 
                crosswordAnswers={crosswordAnswers}
                onReset={handleCrosswordReset}
              />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
