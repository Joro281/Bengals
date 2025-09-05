'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import MollusksCrossword from '../../components/mollusks/MollusksCrossword';
import MollusksCrosswordClues from '../../components/mollusks/MollusksCrosswordClues';
import MolluskNavigationContainer from '../../components/mollusks/MolluskNavigationContainer';

export default function MollusksPage() {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    fishport: '',
    gensan: '',
    ocean: '',
    abalone: '',
    pearl: '',
    oyster: ''
  });
  
  // Mollusk Data - Add/Change/Modify your mollusk data here
  const molluskData = [
    { 
      tagalog: "TAHONG", 
      english: "MUSSEL", 
      image: "/images/products/mollusks/tahong.png" 
    },
    { 
      tagalog: "TALABA", 
      english: "OYSTER", 
      image: "/images/products/mollusks/talaba.png" 
    },
    { 
      tagalog: "HALAAN", 
      english: "CLAM", 
      image: "/images/products/mollusks/halaan.png" 
    },
    { 
      tagalog: "SCALLOP", 
      english: "SCALLOP", 
      image: "/images/products/mollusks/scallops.png" 
    }
  ];

  const handleCrosswordAnswersChange = (answers: typeof crosswordAnswers) => {
    setCrosswordAnswers(answers);
  };

  const handleCrosswordReset = () => {
    setCrosswordAnswers({
      fishport: '',
      gensan: '',
      ocean: '',
      abalone: '',
      pearl: '',
      oyster: ''
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
                  MOLL<span style={{ color: '#741714' }}>USKS</span>
                </h1>
                <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed ">
                We provide clams, scallops, and oysters from clean waters, carefully handled to preserve freshness and flavor.
                </p>
                
                <MolluskNavigationContainer molluskData={molluskData} />
              </div>
              
              {/* Right Column - Mollusks Crossword Puzzle */}
              <div className="hidden lg:block">
                <MollusksCrossword onAnswersChange={handleCrosswordAnswersChange} />
              </div>
            </div>
            
            {/* Crossword Clues - Below the 2-column layout */}
            <div className="hidden lg:block">
              <MollusksCrosswordClues crosswordAnswers={crosswordAnswers} onReset={handleCrosswordReset} />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

