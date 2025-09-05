'use client';



interface CrosswordPuzzleProps {
  crosswordAnswers: {
    bangus: string;
    dalag: string;
    tuna: string;
    market: string;
    icebox: string;
    seafood: string;
  };
  onAnswersChange: (answers: {
    bangus: string;
    dalag: string;
    tuna: string;
    market: string;
    icebox: string;
    seafood: string;
  }) => void;
}

export default function CrosswordPuzzle({ crosswordAnswers, onAnswersChange }: CrosswordPuzzleProps) {



  // Helper function to check if a cell should have white background
  const shouldHaveWhiteBackground = (row: number, col: number) => {
    // Convert to 0-indexed for easier logic
    const r = row - 1;
    const c = col - 1;
    
    // (c2, r2) = (1, 1)
    if (r === 1 && c === 1) return true;
    
    // (c5, r2) = (4, 1)
    if (r === 1 && c === 4) return true;
    
    // (c1-6, r3) = (0-5, 2)
    if (r === 2 && c >= 0 && c <= 5) return true;
    
    // (c8, r3) = (7, 2)
    if (r === 2 && c === 7) return true;
    
    // (c2, r4) = (1, 3)
    if (r === 3 && c === 1) return true;
    
    // (c5, r4) = (4, 3)
    if (r === 3 && c === 4) return true;
    
    // (c8, r4) = (7, 3)
    if (r === 3 && c === 7) return true;
    
    // (c2, r5) = (1, 4)
    if (r === 4 && c === 1) return true;
    
    // (c4-9, r5) = (3-8, 4)
    if (r === 4 && c >= 3 && c <= 8) return true;
    
    // (c2, r6) = (1, 5)
    if (r === 5 && c === 1) return true;
    
    // (c8, r6) = (7, 5)
    if (r === 5 && c === 7) return true;
    
    // (c3-9, r7) = (2-8, 6) - SEAFOOD word (covers all columns 3-9 in row 7)
    if (r === 6 && c >= 2 && c <= 8) return true;
    
    // (c8, r8) = (7, 7)
    if (r === 7 && c === 7) return true;
    
    return false;
  };

  // Helper function to get clue number for a cell
  const getClueNumber = (row: number, col: number) => {
    // Convert to 0-indexed for easier logic
    const r = row - 1;
    const c = col - 1;
    
    // (c1, r3) = (0, 2) - Clue 1
    if (r === 2 && c === 0) return 1;
    
    // (c2, r2) = (1, 1) - Clue 2
    if (r === 1 && c === 1) return 2;
    
    // (c5, r2) = (4, 1) - Clue 3
    if (r === 1 && c === 4) return 3;
    
    // (c4, r5) = (3, 4) - Clue 4
    if (r === 4 && c === 3) return 4;
    
    // (c8, r3) = (7, 2) - Clue 5
    if (r === 2 && c === 7) return 5;
    
    // (c3, r7) = (2, 6) - Clue 6
    if (r === 6 && c === 2) return 6;
    
    return null;
  };

  // Helper function to get the word from specific grid cells
  const getWordFromGrid = (wordType: string) => {
    if (wordType === 'bangus') {
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
    } else if (wordType === 'dalag') {
      // Get letters from (c2,r2) + (c2,r3) + (c2,r4) + (c2,r5) + (c2,r6)
      // Convert to 0-indexed: (1,1) + (1,2) + (1,3) + (1,4) + (1,5)
      const letters = [];
      const rows = [1, 2, 3, 4, 5];
      for (const r of rows) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="1"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'tuna') {
      // Get letters from (c5,r2) + (c5,r3) + (c5,r4) + (c5,r5)
      // Convert to 0-indexed: (4,1) + (4,2) + (4,3) + (4,4)
      const letters = [];
      for (let r = 1; r <= 4; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="4"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'market') {
      // Get letters from (c4,r5) + (c5,r5) + (c6,r5) + (c7,r5) + (c8,r5) + (c9,r5)
      // Convert to 0-indexed: (3,4) + (4,4) + (5,4) + (6,4) + (7,4) + (8,4)
      const letters = [];
      for (let c = 3; c <= 8; c++) {
        const cellContent = document.querySelector(`[data-row="4"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'icebox') {
      // Get letters from (c8,r3) + (c8,r4) + (c8,r5) + (c8,r6) + (c8,r7) + (c8,r8)
      // Convert to 0-indexed: (7,2) + (7,3) + (7,4) + (7,5) + (7,6) + (7,7)
      const letters = [];
      for (let r = 2; r <= 7; r++) {
        const cellContent = document.querySelector(`[data-row="${r}"][data-col="7"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    } else if (wordType === 'seafood') {
      // Get letters from (c3,r7) + (c4,r7) + (c5,r7) + (c6,r7) + (c7,r7) + (c8,r7) + (c9,r7)
      // Convert to 0-indexed: (2,6) + (3,6) + (4,6) + (5,6) + (6,6) + (7,6) + (8,6)
      const letters = [];
      for (let c = 2; c <= 8; c++) {
        const cellContent = document.querySelector(`[data-row="6"][data-col="${c}"] input`) as HTMLInputElement;
        if (cellContent) {
          letters.push(cellContent.value || '');
        }
      }
      return letters.join('').toUpperCase();
    }
    return '';
  };

  // Check if BANGUS is correct
  const checkBangus = () => {
    const bangusWord = getWordFromGrid('bangus');
    const isCorrect = bangusWord === 'BANGUS';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      bangus: bangusWord
    });
    
    return isCorrect;
  };

  // Check if DALAG is correct
  const checkDalag = () => {
    const dalagWord = getWordFromGrid('dalag');
    const isCorrect = dalagWord === 'DALAG';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      dalag: dalagWord
    });
    
    return isCorrect;
  };

  // Check if TUNA is correct
  const checkTuna = () => {
    const tunaWord = getWordFromGrid('tuna');
    const isCorrect = tunaWord === 'TUNA';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      tuna: tunaWord
    });
    
    return isCorrect;
  };

  // Check if MARKET is correct
  const checkMarket = () => {
    const marketWord = getWordFromGrid('market');
    const isCorrect = marketWord === 'MARKET';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      market: marketWord
    });
    
    return isCorrect;
  };

  // Check if ICEBOX is correct
  const checkIcebox = () => {
    const iceboxWord = getWordFromGrid('icebox');
    const isCorrect = iceboxWord === 'ICEBOX';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      icebox: iceboxWord
    });
    
    return isCorrect;
  };

  // Check if SEAFOOD is correct
  const checkSeafood = () => {
    const seafoodWord = getWordFromGrid('seafood');
    const isCorrect = seafoodWord === 'SEAFOOD';
    
    // Update the crossword answers state
    onAnswersChange({
      ...crosswordAnswers,
      seafood: seafoodWord
    });
    
    return isCorrect;
  };

  return (
    <div>
      {/* Right Column - Crossword Puzzle */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-9 border-4 border-black w-[40vw] h-[40vw] bg-white" style={{ backgroundImage: 'url(/images/background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Empty 9x9 grid with white backgrounds for specified cells */}
            {Array.from({ length: 9 }, (_, row) => 
              Array.from({ length: 9 }, (_, col) => {
                const clueNumber = getClueNumber(row + 1, col + 1);
                const hasWhiteBackground = shouldHaveWhiteBackground(row + 1, col + 1);
                return (
                  <div key={`${row}-${col}`} 
                       className={`aspect-square border-r border-b border-black flex items-center justify-center text-sm font-black text-black relative ${
                         hasWhiteBackground ? 'bg-white' : ''
                       }`}
                       data-row={row}
                       data-col={col}>
                    {clueNumber && (
                      <span className="absolute top-1 left-1 text-xs font-special-elite font-bold text-black">
                        {clueNumber}
                      </span>
                    )}
                    {hasWhiteBackground && (
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
                          if (row === 2 && col >= 0 && col <= 5) {
                            // BANGUS row
                            checkBangus();
                          } else if (col === 1 && (row === 1 || row === 2 || row === 3 || row === 4 || row === 5)) {
                            // DALAG column
                            checkDalag();
                          } else if (col === 4 && row >= 1 && row <= 4) {
                            // TUNA column
                            checkTuna();
                          } else if (row === 4 && col >= 3 && col <= 8) {
                            // MARKET row
                            checkMarket();
                          } else if (col === 7 && row >= 2 && row <= 7) {
                            // ICEBOX column
                            checkIcebox();
                          } else if (row === 6 && col >= 2 && col <= 8) {
                            // SEAFOOD row
                            checkSeafood();
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
