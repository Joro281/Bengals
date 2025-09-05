'use client';

import { useState, useEffect } from 'react';

interface CephalopodsCrosswordProps {
  onAnswersChange?: (answers: {
    tentacle: string;
    octopus: string;
    curing: string;
    clam: string;
    gills: string;
    salmon: string;
  }) => void;
}

export default function CephalopodsCrossword({ onAnswersChange }: CephalopodsCrosswordProps) {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    tentacle: '',
    octopus: '',
    curing: '',
    clam: '',
    gills: '',
    salmon: ''
  });

  // Notify parent component when answers change
  useEffect(() => {
    if (onAnswersChange) {
      onAnswersChange(crosswordAnswers);
    }
  }, [crosswordAnswers, onAnswersChange]);

  // Helper function to get word from grid
  const getWordFromGrid = (wordType: string) => {
    let word = '';
    
    switch (wordType) {
      case 'tentacle':
        // TENTACLE: (c3, r2) to (c3, r9) - vertical
        for (let row = 1; row <= 8; row++) {
          const input = document.querySelector(`input[data-row="${row}"][data-col="2"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
      case 'octopus':
        // OCTOPUS: (c1, r5) to (c7, r5) - horizontal
        for (let col = 0; col <= 6; col++) {
          const input = document.querySelector(`input[data-row="4"][data-col="${col}"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
      case 'curing':
        // CURING: (c6, r4) to (c6, r9) - vertical
        for (let row = 3; row <= 8; row++) {
          const input = document.querySelector(`input[data-row="${row}"][data-col="5"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
      case 'clam':
        // CLAM: (c6, r4) to (c9, r4) - horizontal
        for (let col = 5; col <= 8; col++) {
          const input = document.querySelector(`input[data-row="3"][data-col="${col}"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
      case 'gills':
        // GILLS: (c7, r1) to (c7, r5) - vertical
        for (let row = 0; row <= 4; row++) {
          const input = document.querySelector(`input[data-row="${row}"][data-col="6"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
      case 'salmon':
        // SALMON: (c1, r8) to (c6, r8) - horizontal
        for (let col = 0; col <= 5; col++) {
          const input = document.querySelector(`input[data-row="7"][data-col="${col}"]`) as HTMLInputElement;
          if (input) word += input.value || '';
        }
        break;
    }
    
    return word;
  };

  // Check if TENTACLE is correct (c3, r2) to (c3, r9)
  const checkTentacle = () => {
    const tentacleWord = getWordFromGrid('tentacle');
    const isCorrect = tentacleWord === 'TENTACLE';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      tentacle: tentacleWord
    }));
    
    return isCorrect;
  };

  // Check if OCTOPUS is correct (c6, r4) to (c9, r4)
  const checkOctopus = () => {
    const octopusWord = getWordFromGrid('octopus');
    const isCorrect = octopusWord === 'OCTOPUS';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      octopus: octopusWord
    }));
    
    return isCorrect;
  };

  // Check if CURING is correct (c6, r4) to (c6, r9)
  const checkCuring = () => {
    const curingWord = getWordFromGrid('curing');
    const isCorrect = curingWord === 'CURING';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      curing: curingWord
    }));
    
    return isCorrect;
  };

  // Check if CLAM is correct (c6, r4) to (c9, r4)
  const checkClam = () => {
    const clamWord = getWordFromGrid('clam');
    const isCorrect = clamWord === 'CLAM';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      clam: clamWord
    }));
    
    return isCorrect;
  };

  // Check if GILLS is correct (c7, r1) to (c7, r5)
  const checkGills = () => {
    const gillsWord = getWordFromGrid('gills');
    const isCorrect = gillsWord === 'GILLS';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      gills: gillsWord
    }));
    
    return isCorrect;
  };

  // Check if SALMON is correct (c1, r8) to (c6, r8)
  const checkSalmon = () => {
    const salmonWord = getWordFromGrid('salmon');
    const isCorrect = salmonWord === 'SALMON';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      salmon: salmonWord
    }));
    
    return isCorrect;
  };

  return (
    <div>
      {/* Right Column - Cephalopods Crossword Puzzle */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-9 border-4 border-black w-[40vw] h-[40vw]">
            {/* Clean 9x9 grid with specific white cells */}
            {Array.from({ length: 9 }, (_, row) => 
              Array.from({ length: 9 }, (_, col) => {
                // Make cells (c3, r2) through (c3, r9) white
                // Convert to 0-indexed: col === 2 && row >= 1 && row <= 8
                const isWhiteColumn3 = col === 2 && row >= 1 && row <= 8;
                
                // Make cells (c1, r5) through (c7, r5) white
                // Convert to 0-indexed: row === 4 && col >= 0 && col <= 6
                const isWhiteRow5 = row === 4 && col >= 0 && col <= 6;
                
                // Make cells (c6, r4) through (c6, r9) white
                // Convert to 0-indexed: col === 5 && row >= 3 && row <= 8
                const isWhiteColumn6 = col === 5 && row >= 3 && row <= 8;
                
                // Make cells (c6, r4) through (c9, r4) white
                // Convert to 0-indexed: row === 3 && col >= 5 && col <= 8
                const isWhiteRow4 = row === 3 && col >= 5 && col <= 8;
                
                // Make cells (c7, r1) through (c7, r5) white
                // Convert to 0-indexed: col === 6 && row >= 0 && row <= 4
                const isWhiteColumn7 = col === 6 && row >= 0 && row <= 4;
                
                // Make cells (c1, r8) through (c6, r8) white
                // Convert to 0-indexed: row === 7 && col >= 0 && col <= 5
                const isWhiteRow8 = row === 7 && col >= 0 && col <= 5;
                
                const isWhiteCell = isWhiteColumn3 || isWhiteRow5 || isWhiteColumn6 || isWhiteRow4 || isWhiteColumn7 || isWhiteRow8;
                
                // Add clue numbering - allowing multiple numbers in intersection cells
                const clueNumbers = [];
                if (col === 2 && row === 1) clueNumbers.push(1);        // (c3, r2)
                else if (col === 0 && row === 4) clueNumbers.push(2);   // (c1, r5)
                else if (col === 5 && row === 3) {
                  clueNumbers.push(3);   // (c6, r4) - starts here for one word
                  clueNumbers.push(4);   // (c6, r4) - also starts here for another word
                }
                else if (col === 6 && row === 0) clueNumbers.push(5);   // (c7, r1)
                else if (col === 0 && row === 7) clueNumbers.push(6);   // (c1, r8)
                
                return (
                  <div
                    key={`${row}-${col}`}
                    className={`aspect-square border-r border-b border-black relative ${
                      isWhiteCell ? 'bg-white' : ''
                    }`}>
                    {clueNumbers.length > 0 && (
                      <span className="absolute top-1 left-1 text-xs font-special-elite font-bold text-black z-10">
                        {clueNumbers.join(',')}
                      </span>
                    )}
                    {isWhiteCell && (
                      <input
                        type="text"
                        maxLength={1}
                        className="w-full h-full text-center text-base font-special-elite font-bold bg-transparent border-none outline-none"
                        style={{ color: '#741714' }}
                        placeholder=""
                        data-row={row}
                        data-col={col}
                        onKeyPress={(e) => {
                          // Only allow letters (A-Z, a-z)
                          const char = String.fromCharCode(e.which);
                          if (!/[A-Za-z]/.test(char)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          // Auto-capitalize and ensure only letters
                          const value = e.target.value.replace(/[^A-Za-z]/g, '').toUpperCase();
                          e.target.value = value;
                          
                          // Check appropriate word after each input change
                          if (col === 2 && row >= 1 && row <= 8) {
                            // TENTACLE column (c3, r2) to (c3, r9)
                            checkTentacle();
                          } else if (row === 4 && col >= 0 && col <= 6) {
                            // OCTOPUS row (c1, r5) to (c7, r5)
                            checkOctopus();
                          } else if (col === 5 && row >= 3 && row <= 8) {
                            // CURING column (c6, r4) to (c6, r9)
                            checkCuring();
                          } else if (row === 3 && col >= 5 && col <= 8) {
                            // CLAM row (c6, r4) to (c9, r4)
                            checkClam();
                          } else if (col === 6 && row >= 0 && row <= 4) {
                            // GILLS column (c7, r1) to (c7, r5)
                            checkGills();
                          } else if (row === 7 && col >= 0 && col <= 5) {
                            // SALMON row (c1, r8) to (c6, r8)
                            checkSalmon();
                          }
                        }}
                        onInput={(e) => {
                          // Ensure only letters on input
                          const value = e.currentTarget.value.replace(/[^A-Za-z]/g, '').toUpperCase();
                          e.currentTarget.value = value;
                        }}
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}