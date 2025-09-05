'use client';

import { useState } from 'react';
import Footer from '../../components/Footer';
import CephalopodsCrossword from '../../components/cephalopods/CephalopodsCrossword';
import CephalopodsCrosswordClues from '../../components/cephalopods/CephalopodsCrosswordClues';
import CephalopodNavigationContainer from '../../components/cephalopods/CephalopodNavigationContainer';

export default function CephalopodsPage() {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    tentacle: '',
    octopus: '',
    curing: '',
    clam: '',
    gills: '',
    salmon: ''
  });
  
  // Cephalopod Data - Add/Change/Modify your cephalopod data here
  const cephalopodData = [
    { 
      tagalog: "PUSIT", 
      english: "SQUID", 
      image: "/images/products/cephalopods/pusit.png" 
    },
    { 
      tagalog: "DAGAT-DAGAT", 
      english: "BABY SQUID", 
      image: "/images/products/cephalopods/dagatdagat.png" 
    },
    { 
      tagalog: "PUGITA", 
      english: "OCTOPUS", 
      image: "/images/products/cephalopods/pugita.png" 
    },
    { 
      tagalog: "PUSIT LUMOT", 
      english: "CUTTLEFISH", 
      image: "/images/products/cephalopods/pusitlumot.png" 
    }
  ];

  const handleCrosswordAnswersChange = (answers: typeof crosswordAnswers) => {
    setCrosswordAnswers(answers);
  };

  const handleCrosswordReset = () => {
    setCrosswordAnswers({
      tentacle: '',
      octopus: '',
      curing: '',
      clam: '',
      gills: '',
      salmon: ''
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
                CEPHALO<span style={{ color: '#741714' }}>PODS</span>
                </h1>
                <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed ">
                We offer premium squid, lumot squid, cuttlefish, and octopus, packed fresh to preserve their natural taste and tenderness.
                </p>
                
                <CephalopodNavigationContainer cephalopodData={cephalopodData} />
              </div>
              
              {/* Right Column - Cephalopods Crossword Puzzle */}
              <div className="hidden lg:block">
                <CephalopodsCrossword onAnswersChange={handleCrosswordAnswersChange} />
              </div>
            </div>
            
            {/* Crossword Clues - Below the 2-column layout */}
            <div className="hidden lg:block">
              <CephalopodsCrosswordClues crosswordAnswers={crosswordAnswers} onReset={handleCrosswordReset} />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
