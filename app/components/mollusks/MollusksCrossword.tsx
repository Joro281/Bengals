'use client';

import { useState, useEffect } from 'react';

interface MollusksCrosswordProps {
  onAnswersChange?: (answers: {
    fishport: string;
    gensan: string;
    ocean: string;
    abalone: string;
    pearl: string;
    oyster: string;
  }) => void;
}

export default function MollusksCrossword({ onAnswersChange }: MollusksCrosswordProps) {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    fishport: '',
    gensan: '',
    ocean: '',
    abalone: '',
    pearl: '',
    oyster: ''
  });

  // Notify parent component when answers change
  useEffect(() => {
    if (onAnswersChange) {
      onAnswersChange(crosswordAnswers);
    }
  }, [crosswordAnswers, onAnswersChange]);

  // Check if FISHPORT is correct (c4, r1) to (c4, r8)
  const checkFishport = () => {
    const fishportWord = getWordFromGrid('fishport');
    const isCorrect = fishportWord === 'FISHPORT';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      fishport: fishportWord
    }));
    
    return isCorrect;
  };

  // Check if GENSAN is correct (c1, r3) to (c6, r3)
  const checkGensan = () => {
    const gensanWord = getWordFromGrid('gensan');
    const isCorrect = gensanWord === 'GENSAN';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      gensan: gensanWord
    }));
    
    return isCorrect;
  };

  // Check if OCEAN is correct (c4, r6) to (c8, r6)
  const checkOcean = () => {
    const oceanWord = getWordFromGrid('ocean');
    const isCorrect = oceanWord === 'OCEAN';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      ocean: oceanWord
    }));
    
    return isCorrect;
  };

  // Check if ABALONE is correct (c8, r1) to (c8, r7)
  const checkAbalone = () => {
    const abaloneWord = getWordFromGrid('abalone');
    const isCorrect = abaloneWord === 'ABALONE';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      abalone: abaloneWord
    }));
    
    return isCorrect;
  };

  // Check if PEARL is correct (c6, r5) to (c6, r9)
  const checkPearl = () => {
    const pearlWord = getWordFromGrid('pearl');
    const isCorrect = pearlWord === 'PEARL';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      pearl: pearlWord
    }));
    
    return isCorrect;
  };

  // Check if OYSTER is correct (c1, r8) to (c6, r8)
  const checkOyster = () => {
    const oysterWord = getWordFromGrid('oyster');
    const isCorrect = oysterWord === 'OYSTER';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      oyster: oysterWord
    }));
    
    return isCorrect;
  };

  // Helper function to get the word from specific grid cells
  const getWordFromGrid = (wordType: string) => {
    if (wordType === 'fishport') {
      // Get letters from (c4,r1) + (c4,r2) + (c4,r3) + (c4,r4) + (c4,r5) + (c4,r6) + (c4,r7) + (c4,r8)
      // Convert to 0-indexed: (3,0) + (3,1) + (3,2) + (3,3) + (3,4) + (3,5) + (3,6) + (3,7)
      const letters = [];
      for (let r = 0; r <= 7; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="3"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'gensan') {
      // Get letters from (c1,r3) + (c2,r3) + (c3,r3) + (c4,r3) + (c5,r3) + (c6,r3)
      // Convert to 0-indexed: (0,2) + (1,2) + (2,2) + (3,2) + (4,2) + (5,2)
      const letters = [];
      for (let c = 0; c <= 5; c++) {
        const cellContent = document.querySelector(`[data-row="2"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'ocean') {
      // Get letters from (c4,r6) + (c5,r6) + (c6,r6) + (c7,r6) + (c8,r6)
      // Convert to 0-indexed: (3,5) + (4,5) + (5,5) + (6,5) + (7,5)
      const letters = [];
      for (let c = 3; c <= 7; c++) {
        const cellContent = document.querySelector(`[data-row="5"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'abalone') {
      // Get letters from (c8,r1) + (c8,r2) + (c8,r3) + (c8,r4) + (c8,r5) + (c8,r6) + (c8,r7)
      // Convert to 0-indexed: (7,0) + (7,1) + (7,2) + (7,3) + (7,4) + (7,5) + (7,6)
      const letters = [];
      for (let r = 0; r <= 6; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="7"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'pearl') {
      // Get letters from (c6,r5) + (c6,r6) + (c6,r7) + (c6,r8) + (c6,r9)
      // Convert to 0-indexed: (5,4) + (5,5) + (5,6) + (5,7) + (5,8)
      const letters = [];
      for (let r = 4; r <= 8; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="5"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'oyster') {
      // Get letters from (c1,r8) + (c2,r8) + (c3,r8) + (c4,r8) + (c5,r8) + (c6,r8)
      // Convert to 0-indexed: (0,7) + (1,7) + (2,7) + (3,7) + (4,7) + (5,7)
      const letters = [];
      for (let c = 0; c <= 5; c++) {
        const cellContent = document.querySelector(`[data-row="7"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    }
    return '';
  };

  return (
    <div>
      {/* Right Column - Mollusks Crossword Puzzle */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-9 border-4 border-black w-[40vw] h-[40vw]">
            {/* Clean 9x9 grid with specific white cells */}
            {Array.from({ length: 9 }, (_, row) => 
              Array.from({ length: 9 }, (_, col) => {
                // Make cells (c4, r1) through (c4, r8) white
                // Convert to 0-indexed: col === 3 && row >= 0 && row <= 7
                const isWhiteColumn4 = col === 3 && row >= 0 && row <= 7;
                
                // Make cells (c1, r3) through (c6, r3) white
                // Convert to 0-indexed: row === 2 && col >= 0 && col <= 5
                const isWhiteRow3 = row === 2 && col >= 0 && col <= 5;
                
                // Make cells (c4, r6) through (c8, r6) white
                // Convert to 0-indexed: row === 5 && col >= 3 && col <= 7
                const isWhiteRow6 = row === 5 && col >= 3 && col <= 7;
                
                // Make cells (c8, r1) through (c8, r7) white
                // Convert to 0-indexed: col === 7 && row >= 0 && row <= 6
                const isWhiteColumn8 = col === 7 && row >= 0 && row <= 6;
                
                // Make cells (c6, r5) through (c6, r9) white
                // Convert to 0-indexed: col === 5 && row >= 4 && row <= 8
                const isWhiteColumn6 = col === 5 && row >= 4 && row <= 8;
                
                // Make cells (c1, r8) through (c6, r8) white
                // Convert to 0-indexed: row === 7 && col >= 0 && col <= 5
                const isWhiteRow8 = row === 7 && col >= 0 && col <= 5;
                
                const isWhiteCell = isWhiteColumn4 || isWhiteRow3 || isWhiteRow6 || isWhiteColumn8 || isWhiteColumn6 || isWhiteRow8;
                
                // Add clue numbers to specific cells
                let clueNumber = null;
                if (row === 0 && col === 3) clueNumber = 1;      // (c4, r1)
                else if (row === 2 && col === 0) clueNumber = 2; // (c1, r3)
                else if (row === 5 && col === 3) clueNumber = 3; // (c4, r6)
                else if (row === 0 && col === 7) clueNumber = 4; // (c8, r1)
                else if (row === 4 && col === 5) clueNumber = 5; // (c6, r5)
                else if (row === 7 && col === 0) clueNumber = 6; // (c1, r8)
                
                return (
                  <div key={`${row}-${col}`} 
                       className={`aspect-square border-r border-b border-black relative ${
                         isWhiteCell ? 'bg-white' : ''
                       }`}
                       data-row={row}
                       data-col={col}>
                    {clueNumber && (
                      <span className="absolute top-1 left-1 text-xs font-special-elite font-bold text-black z-10">
                        {clueNumber}
                      </span>
                    )}
                    {isWhiteCell && (
                      <input
                        type="text"
                        maxLength={1}
                        className="w-full h-full text-center text-base font-special-elite font-bold bg-transparent border-none outline-none"
                        style={{ color: '#741714' }}
                        placeholder=""
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
                          if (col === 3 && row >= 0 && row <= 7) {
                            // FISHPORT column (c4, r1) to (c4, r8)
                            checkFishport();
                          } else if (row === 2 && col >= 0 && col <= 5) {
                            // GENSAN row (c1, r3) to (c6, r3)
                            checkGensan();
                          } else if (row === 5 && col >= 3 && col <= 7) {
                            // OCEAN row (c4, r6) to (c8, r6)
                            checkOcean();
                          } else if (col === 7 && row >= 0 && row <= 6) {
                            // ABALONE column (c8, r1) to (c8, r7)
                            checkAbalone();
                          } else if (col === 5 && row >= 4 && row <= 8) {
                            // PEARL column (c6, r5) to (c6, r9)
                            checkPearl();
                          } else if (row === 7 && col >= 0 && col <= 5) {
                            // OYSTER row (c1, r8) to (c6, r8)
                            checkOyster();
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
