'use client';

import { useState, useEffect } from 'react';

interface ShellfishCrosswordProps {
  onAnswersChange?: (answers: {
    mussels: string;
    talaba: string;
    sugpo: string;
    scallop: string;
    lobster: string;
    alimasag: string;
  }) => void;
}

export default function ShellfishCrossword({ onAnswersChange }: ShellfishCrosswordProps) {
  const [crosswordAnswers, setCrosswordAnswers] = useState({
    mussels: '',
    talaba: '',
    sugpo: '',
    scallop: '',
    lobster: '',
    alimasag: ''
  });

  // Notify parent component when answers change
  useEffect(() => {
    if (onAnswersChange) {
      onAnswersChange(crosswordAnswers);
    }
  }, [crosswordAnswers, onAnswersChange]);

  // Check if MUSSELS is correct (c2, r1) to (c8, r1)
  const checkMussels = () => {
    const musselsWord = getWordFromGrid('mussels');
    const isCorrect = musselsWord === 'MUSSELS';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      mussels: musselsWord
    }));
    
    return isCorrect;
  };

  // Check if TALABA is correct
  const checkTalaba = () => {
    const talabaWord = getWordFromGrid('talaba');
    const isCorrect = talabaWord === 'TALABA';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      talaba: talabaWord
    }));
    
    return isCorrect;
  };

  // Check if SUGPO is correct
  const checkSugpo = () => {
    const sugpoWord = getWordFromGrid('sugpo');
    const isCorrect = sugpoWord === 'SUGPO';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      sugpo: sugpoWord
    }));
    
    return isCorrect;
  };

  // Check if SCALLOP is correct
  const checkScallop = () => {
    const scallopWord = getWordFromGrid('scallop');
    const isCorrect = scallopWord === 'SCALLOP';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      scallop: scallopWord
    }));
    
    return isCorrect;
  };

  // Check if LOBSTER is correct
  const checkLobster = () => {
    const lobsterWord = getWordFromGrid('lobster');
    const isCorrect = lobsterWord === 'LOBSTER';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      lobster: lobsterWord
    }));
    
    return isCorrect;
  };

  // Check if ALIMASAG is correct
  const checkAlimasag = () => {
    const alimasagWord = getWordFromGrid('alimasag');
    const isCorrect = alimasagWord === 'ALIMASAG';
    
    setCrosswordAnswers(prev => ({
      ...prev,
      alimasag: alimasagWord
    }));
    
    return isCorrect;
  };

  // Helper function to get the word from specific grid cells
  const getWordFromGrid = (wordType: string) => {
    if (wordType === 'mussels') {
      // Get letters from (c2,r1) + (c3,r1) + (c4,r1) + (c5,r1) + (c6,r1) + (c7,r1) + (c8,r1)
      // Convert to 0-indexed: (1,0) + (2,0) + (3,0) + (4,0) + (5,0) + (6,0) + (7,0)
      const letters = [];
      for (let c = 1; c <= 7; c++) {
        const cellContent = document.querySelector(`[data-row="0"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'talaba') {
      // Get letters from (c3,r3) + (c4,r3) + (c5,r3) + (c6,r3) + (c7,r3) + (c8,r3)
      // Convert to 0-indexed: (2,2) + (3,2) + (4,2) + (5,2) + (6,2) + (7,2)
      const letters = [];
      for (let c = 2; c <= 7; c++) {
        const cellContent = document.querySelector(`[data-row="2"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'sugpo') {
      // Get letters from (c1,r7) + (c2,r7) + (c3,r7) + (c4,r7) + (c5,r7)
      // Convert to 0-indexed: (0,6) + (1,6) + (2,6) + (3,6) + (4,6)
      const letters = [];
      for (let c = 0; c <= 4; c++) {
        const cellContent = document.querySelector(`[data-row="6"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'scallop') {
      // Get letters from (c4,r1) + (c4,r2) + (c4,r3) + (c4,r4) + (c4,r5) + (c4,r6) + (c4,r7)
      // Convert to 0-indexed: (3,0) + (3,1) + (3,2) + (3,3) + (3,4) + (3,5) + (3,6)
      const letters = [];
      for (let r = 0; r <= 6; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="3"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'lobster') {
      // Get letters from (c7,r1) + (c7,r2) + (c7,r3) + (c7,r4) + (c7,r5) + (c7,r6) + (c7,r7)
      // Convert to 0-indexed: (6,0) + (6,1) + (6,2) + (6,3) + (6,4) + (6,5) + (6,6)
      const letters = [];
      for (let r = 0; r <= 6; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="6"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'alimasag') {
      // Get letters from (c1,r2) + (c1,r3) + (c1,r4) + (c1,r5) + (c1,r6) + (c1,r7) + (c1,r8) + (c1,r9)
      // Convert to 0-indexed: (0,1) + (0,2) + (0,3) + (0,4) + (0,5) + (0,6) + (0,7) + (0,8)
      const letters = [];
      for (let r = 1; r <= 8; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="0"] input`) as HTMLInputElement;
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
      {/* Right Column - Shellfish Crossword Puzzle */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-9 border-4 border-black w-[40vw] h-[40vw]">
            {/* Clean 9x9 grid with specific white cells */}
            {Array.from({ length: 9 }, (_, row) => 
              Array.from({ length: 9 }, (_, col) => {
                // Make cells (c2, r1) through (c8, r1) white
                const isWhiteRow1 = row === 0 && col >= 1 && col <= 7;
                // Make cells (c4, r2) through (c4, r7) white
                const isWhiteColumn4 = col === 3 && row >= 1 && row <= 6;
                // Make cells (c7, r2) through (c7, r7) white
                const isWhiteColumn7 = col === 6 && row >= 1 && row <= 6;
                // Make cells (c3, r3) through (c8, r3) white
                const isWhiteRow3 = row === 2 && col >= 2 && col <= 7;
                // Make cells (c1, r7) through (c5, r7) white
                const isWhiteRow7 = row === 6 && col >= 0 && col <= 4;
                // Make cells (c1, r2) through (c1, r9) white
                const isWhiteColumn1 = col === 0 && row >= 1 && row <= 8;
                
                const isWhiteCell = isWhiteRow1 || isWhiteColumn4 || isWhiteColumn7 || isWhiteRow3 || isWhiteRow7 || isWhiteColumn1;
                
                // Add clue numbers to specific cells
                let clueNumber = null;
                if (row === 0 && col === 1) clueNumber = 1;      // (c2, r1)
                else if (row === 0 && col === 3) clueNumber = 2; // (c4, r1)
                else if (row === 0 && col === 6) clueNumber = 3; // (c7, r1)
                else if (row === 2 && col === 2) clueNumber = 4; // (c3, r3)
                else if (row === 6 && col === 0) clueNumber = 5; // (c1, r7)
                else if (row === 1 && col === 0) clueNumber = 6; // (c1, r2)
                
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
                          if (row === 0 && col >= 1 && col <= 7) {
                            // MUSSELS row (c2, r1) to (c8, r1)
                            checkMussels();
                          } else if (row === 2 && col >= 2 && col <= 7) {
                            // TALABA row (c3, r3) to (c8, r3)
                            checkTalaba();
                          } else if (row === 6 && col >= 0 && col <= 4) {
                            // SUGPO row (c1, r7) to (c5, r7)
                            checkSugpo();
                          } else if (col === 3 && row >= 0 && row <= 6) {
                            // SCALLOP column (c4, r1) to (c4, r7)
                            checkScallop();
                          } else if (col === 6 && row >= 0 && row <= 6) {
                            // LOBSTER column (c7, r1) to (c7, r7)
                            checkLobster();
                          } else if (col === 0 && row >= 1 && row <= 8) {
                            // ALIMASAG column (c1, r2) to (c1, r9)
                            checkAlimasag();
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
