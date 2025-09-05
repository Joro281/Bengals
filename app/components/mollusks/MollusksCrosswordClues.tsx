'use client';

import { useState } from 'react';

interface MollusksCrosswordCluesProps {
  crosswordAnswers: {
    fishport: string;
    gensan: string;
    ocean: string;
    abalone: string;
    pearl: string;
    oyster: string;
  };
  onReset: () => void;
}

export default function MollusksCrosswordClues({ crosswordAnswers, onReset }: MollusksCrosswordCluesProps) {
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
      fishport: 'FISHPORT',
      gensan: 'GENSAN',
      ocean: 'OCEAN',
      abalone: 'ABALONE',
      pearl: 'PEARL',
      oyster: 'OYSTER'
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
                  <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">2.</span>
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('gensan'))}>
                    City in Mindanao known as the Tuna Capital
                    {isClueCorrect('gensan') && (
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
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('ocean'))}>
                    Largest body of salt water
                    {isClueCorrect('ocean') && (
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
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('oyster'))}>
                    Shellfish with rough gray shell
                    {isClueCorrect('oyster') && (
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
                  <span className="font-special-elite font-bold text-lg text-black mr-3 min-w-[2rem]">1.</span>
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('fishport'))}>
                    Where daily seafood catch is landed
                    {isClueCorrect('fishport') && (
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
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('abalone'))}>
                    Sea snail with ear-shaped shell
                    {isClueCorrect('abalone') && (
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
                  <span className="font-special-elite text-base text-black" style={getStrikethroughStyle(isClueCorrect('pearl'))}>
                    Gem formed inside an oyster
                    {isClueCorrect('pearl') && (
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
                    crosswordAnswers.fishport === 'FISHPORT',
                    crosswordAnswers.gensan === 'GENSAN',
                    crosswordAnswers.ocean === 'OCEAN',
                    crosswordAnswers.abalone === 'ABALONE',
                    crosswordAnswers.pearl === 'PEARL',
                    crosswordAnswers.oyster === 'OYSTER'
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
