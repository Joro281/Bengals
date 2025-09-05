'use client';

import { useState } from 'react';

interface CrosswordCluesProps {
  crosswordAnswers: {
    bangus: string;
    dalag: string;
    tuna: string;
    market: string;
    icebox: string;
    seafood: string;
  };
  onReset: () => void;
}

export default function CrosswordClues({ crosswordAnswers, onReset }: CrosswordCluesProps) {
  const [checkedAnswers, setCheckedAnswers] = useState(false);

  const checkCrosswordAnswers = () => {
    setCheckedAnswers(true);
  };

  const resetCrossword = () => {
    setCheckedAnswers(false);
    onReset();
  };

  // CSS animation for left-to-right strikethrough
  const getStrikethroughStyle = (isCorrect: boolean) => {
    if (!isCorrect) {
      return {
        position: 'relative' as const
      };
    }
    
    return {
      position: 'relative' as const,
      animation: 'drawStrikethrough 0.8s ease-out forwards'
    };
  };

  // Helper function to check if a clue is correct
  const isClueCorrect = (word: keyof typeof crosswordAnswers) => {
    if (!checkedAnswers) return false;
    
    const correctAnswers = {
      bangus: 'BANGUS',
      dalag: 'DALAG',
      tuna: 'TUNA',
      market: 'MARKET',
      icebox: 'ICEBOX',
      seafood: 'SEAFOOD'
    };
    
    return crosswordAnswers[word] === correctAnswers[word];
  };

  return (
    <>
      <style jsx>{`
        @keyframes drawScribble {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        
        .scribble-svg {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 20px;
          transform: translateY(-50%);
          overflow: visible;
        }
        
        .scribble-line {
          stroke: #741714;
          stroke-width: 3;
          stroke-linecap: round;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        
        .scribble-line.animate {
          animation: drawScribble 1.2s ease-out forwards;
        }
      `}</style>
      <div className="p-8 border-4 border-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-special-elite font-bold text-2xl md:text-3xl text-black">CROSSWORD <span style={{ color: '#741714' }}>CLUES</span></h2>
            
            {/* Crossword Control Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={checkCrosswordAnswers}
                className="px-6 py-2 bg-black text-white font-special-elite font-bold border-2 border-black hover:bg-white hover:text-black transition-colors duration-200"
              >
                Check Answers
              </button>
              <button
                onClick={resetCrossword}
                className="px-6 py-2 bg-white text-black font-special-elite font-bold border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                Reset
              </button>
            </div>
          </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ACROSS Clues */}
          <div>
            <h3 className="font-special-elite font-bold text-xl text-black mb-4 border-b-2 border-black pb-2">ACROSS</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">1.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('bangus'))}>
                  National fish of the Philippines
                  {isClueCorrect('bangus') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 300 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="290" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">4.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('market'))}>
                  Place where fish are bought and sold
                  {isClueCorrect('market') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 300 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="290" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">6.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('seafood'))}>
                  General term for fish and shellfish
                  {isClueCorrect('seafood') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 300 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="290" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
          
          {/* DOWN Clues */}
          <div>
            <h3 className="font-special-elite font-bold text-xl text-black mb-4 border-b-2 border-black pb-2">DOWN</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">2.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('dalag'))}>
                  Freshwater mudfish found in ponds and rivers
                  {isClueCorrect('dalag') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 400 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="390" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">3.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('tuna'))}>
                  Gensan&apos;s most famous export fish
                  {isClueCorrect('tuna') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 300 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="290" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">5.</span>
                <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('icebox'))}>
                  Keeps the catch fresh and cold
                  {isClueCorrect('icebox') && (
                    <div className="scribble-svg">
                      <svg width="100%" height="20" viewBox="0 0 300 20">
                        <line 
                          className="scribble-line animate"
                          x1="10" y1="10" x2="290" y2="10"
                        />
                      </svg>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Score Display */}
        {checkedAnswers && (
          <div className="mt-6 text-center">
            <span className="font-special-elite font-bold text-lg text-black">
              Score: {
                [
                  crosswordAnswers.bangus === 'BANGUS',
                  crosswordAnswers.dalag === 'DALAG',
                  crosswordAnswers.tuna === 'TUNA',
                  crosswordAnswers.market === 'MARKET',
                  crosswordAnswers.icebox === 'ICEBOX',
                  crosswordAnswers.seafood === 'SEAFOOD'
                ].filter(Boolean).length
              }/6
            </span>
          </div>
        )}
       </div>
     </div>
     </>
   );
 }
