'use client';
import { useState } from 'react';

type ProductKey = 'bangus' | 'tilapia' | 'tamban' | 'galunggong' | 'tahong' | 'talaba' | 'halaan' | 'scallop' | 'pusit' | 'dagat-dagat' | 'pugita' | 'pusit-lumot' | 'sugpo' | 'hipon' | 'alimango' | 'alimasag';

interface SeafoodSelectionTableProps {
  quantities: Record<ProductKey, string>;
  onQuantityChange: (product: ProductKey, value: string) => void;
  onIncrement: (product: ProductKey) => void;
  onDecrement: (product: ProductKey) => void;
}

export default function SeafoodSelectionTable({
  quantities,
  onQuantityChange,
  onIncrement,
  onDecrement
}: SeafoodSelectionTableProps) {
  // State for dropdown visibility
  const [dropdownStates, setDropdownStates] = useState({
    wholeFish: true,
    mollusks: true,
    cephalopods: true,
    shellfish: true
  });

  // Stock limits for each product
  const stockLimits = {
    bangus: 60,
    tilapia: 45,
    tamban: 80,
    galunggong: 35,
    tahong: 100,
    talaba: 25,
    halaan: 70,
    scallop: 15,
    pusit: 40,
    'dagat-dagat': 20,
    pugita: 12,
    'pusit-lumot': 55,
    sugpo: 18,
    hipon: 30,
    alimango: 22,
    alimasag: 28
  };

  const toggleDropdown = (section: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
        <h2 className="font-special-elite font-bold text-xl md:text-2xl lg:text-3xl text-black mb-6 text-left">
          SELECT YOUR <span style={{color: '#741714'}}>SEAFOOD</span>
        </h2>
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-2 border-black min-w-max">
          {/* Header Row */}
          <thead>
            <tr>
              <th className="border-2 border-black p-2 md:p-3 text-left font-special-elite font-bold text-xs md:text-sm lg:text-base text-black w-1/4">
                PRODUCT
              </th>
              <th className="border-2 border-black p-2 md:p-3 text-left font-special-elite font-bold text-xs md:text-sm lg:text-base text-black w-1/6">
                PRICE
              </th>
              <th className="border-2 border-black p-2 md:p-3 text-left font-special-elite font-bold text-xs md:text-sm lg:text-base text-black w-2/5">
                QUANTITY
              </th>
              <th className="border-2 border-black p-2 md:p-3 text-left font-special-elite font-bold text-xs md:text-sm lg:text-base text-black w-1/6">
                ESTIMATED PRICE
              </th>
            </tr>
          </thead>
          
          <tbody className="overflow-x-auto">
            {/* Category: Whole Fish */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-white cursor-pointer hover:bg-opacity-80" style={{backgroundColor: '#741714'}} onClick={() => toggleDropdown('wholeFish')}>
                <div className="flex items-center justify-between">
                  <span>WHOLE FISH</span>
                  <span className="text-lg">{dropdownStates.wholeFish ? '▼' : '▶'}</span>
                </div>
              </td>
            </tr>
            
            {dropdownStates.wholeFish && (
              <>
                {/* Bangus Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    BANGUS
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱220/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('bangus')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('bangus')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.bangus}
                          onChange={(e) => onQuantityChange('bangus', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(60 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.bangus) || 0) * 220}
                  </td>
                </tr>

                {/* Tilapia Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    TILAPIA
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱180/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('tilapia')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('tilapia')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.tilapia}
                          onChange={(e) => onQuantityChange('tilapia', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(45 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.tilapia) || 0) * 180}
                  </td>
                </tr>

                {/* Tamban Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    TAMBAN
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱150/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('tamban')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('tamban')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.tamban}
                          onChange={(e) => onQuantityChange('tamban', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(80 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.tamban) || 0) * 150}
                  </td>
                </tr>

                {/* Galunggong Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    GALUNGGONG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱200/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('galunggong')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('galunggong')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.galunggong}
                          onChange={(e) => onQuantityChange('galunggong', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(35 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.galunggong) || 0) * 200}
                  </td>
                </tr>
              </>
            )}

            {/* Whole Fish Category Total */}
            <tr>
              <td colSpan={3} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-right">
                WHOLE FISH TOTAL:
              </td>
              <td className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black">
                ₱{((parseInt(quantities.bangus) || 0) * 220) + ((parseInt(quantities.tilapia) || 0) * 180) + ((parseInt(quantities.tamban) || 0) * 150) + ((parseInt(quantities.galunggong) || 0) * 200)}
              </td>
            </tr>

            {/* Category: Mollusks */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-white cursor-pointer hover:bg-opacity-80" style={{backgroundColor: '#741714'}} onClick={() => toggleDropdown('mollusks')}>
                <div className="flex items-center justify-between">
                  <span>MOLLUSKS</span>
                  <span className="text-lg">{dropdownStates.mollusks ? '▼' : '▶'}</span>
                </div>
              </td>
            </tr>

            {dropdownStates.mollusks && (
              <>
                {/* Tahong Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    TAHONG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱120/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('tahong')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('tahong')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.tahong}
                          onChange={(e) => onQuantityChange('tahong', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(100 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.tahong) || 0) * 120}
                  </td>
                </tr>

                {/* Talaba Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    TALABA
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱280/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('talaba')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('talaba')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.talaba}
                          onChange={(e) => onQuantityChange('talaba', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(25 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.talaba) || 0) * 280}
                  </td>
                </tr>

                {/* Halaan Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    HALAAN
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱160/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('halaan')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('halaan')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.halaan}
                          onChange={(e) => onQuantityChange('halaan', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(70 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.halaan) || 0) * 160}
                  </td>
                </tr>

                {/* Scallop Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    SCALLOP
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱350/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('scallop')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('scallop')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.scallop}
                          onChange={(e) => onQuantityChange('scallop', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(15 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.scallop) || 0) * 350}
                  </td>
                </tr>
              </>
            )}

            {/* Mollusks Category Total */}
            <tr>
              <td colSpan={3} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-right">
                MOLLUSKS TOTAL:
              </td>
              <td className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black">
                ₱{((parseInt(quantities.tahong) || 0) * 120) + ((parseInt(quantities.talaba) || 0) * 280) + ((parseInt(quantities.halaan) || 0) * 160) + ((parseInt(quantities.scallop) || 0) * 350)}
              </td>
            </tr>

            {/* Category: Cephalopods */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-white cursor-pointer hover:bg-opacity-80" style={{backgroundColor: '#741714'}} onClick={() => toggleDropdown('cephalopods')}>
                <div className="flex items-center justify-between">
                  <span>CEPHALOPODS</span>
                  <span className="text-lg">{dropdownStates.cephalopods ? '▼' : '▶'}</span>
                </div>
              </td>
            </tr>

            {dropdownStates.cephalopods && (
              <>
                {/* Pusit Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    PUSIT
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱320/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('pusit')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('pusit')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.pusit}
                          onChange={(e) => onQuantityChange('pusit', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(40 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.pusit) || 0) * 320}
                  </td>
                </tr>

                {/* Dagat-dagat Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    DAGAT-DAGAT
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱380/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('dagat-dagat')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('dagat-dagat')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities['dagat-dagat']}
                          onChange={(e) => onQuantityChange('dagat-dagat', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(20 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities['dagat-dagat']) || 0) * 380}
                  </td>
                </tr>

                {/* Pugita Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    PUGITA
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱450/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('pugita')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('pugita')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.pugita}
                          onChange={(e) => onQuantityChange('pugita', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(12 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.pugita) || 0) * 450}
                  </td>
                </tr>

                {/* Pusit Lumot Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    PUSIT LUMOT
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱290/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('pusit-lumot')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('pusit-lumot')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities['pusit-lumot']}
                          onChange={(e) => onQuantityChange('pusit-lumot', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(55 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities['pusit-lumot']) || 0) * 290}
                  </td>
                </tr>
              </>
            )}

            {/* Cephalopods Category Total */}
            <tr>
              <td colSpan={3} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-right">
                CEPHALOPODS TOTAL:
              </td>
              <td className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black">
                ₱{((parseInt(quantities.pusit) || 0) * 320) + ((parseInt(quantities['dagat-dagat']) || 0) * 380) + ((parseInt(quantities.pugita) || 0) * 450) + ((parseInt(quantities['pusit-lumot']) || 0) * 290)}
              </td>
            </tr>

            {/* Category: Shellfish */}
            <tr>
              <td colSpan={4} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-white cursor-pointer hover:bg-opacity-80" style={{backgroundColor: '#741714'}} onClick={() => toggleDropdown('shellfish')}>
                <div className="flex items-center justify-between">
                  <span>SHELLFISH</span>
                  <span className="text-lg">{dropdownStates.shellfish ? '▼' : '▶'}</span>
                </div>
              </td>
            </tr>

            {dropdownStates.shellfish && (
              <>
                {/* Sugpo Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    SUGPO
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱520/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('sugpo')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('sugpo')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.sugpo}
                          onChange={(e) => onQuantityChange('sugpo', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(18 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.sugpo) || 0) * 520}
                  </td>
                </tr>

                {/* Hipon Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    HIPON
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱480/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('hipon')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('hipon')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.hipon}
                          onChange={(e) => onQuantityChange('hipon', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(30 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.hipon) || 0) * 480}
                  </td>
                </tr>

                {/* Alimango Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ALIMANGO
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱650/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('alimango')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('alimango')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.alimango}
                          onChange={(e) => onQuantityChange('alimango', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(22 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.alimango) || 0) * 650}
                  </td>
                </tr>

                {/* Alimasag Row */}
                <tr>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ALIMASAG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱580/KG
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="flex space-x-0">
                          <button 
                            onClick={() => onIncrement('alimasag')}
                            className="w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-b-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▲
                          </button>
                          <button 
                            onClick={() => onDecrement('alimasag')}
                            className="w-6 h-6 md:w-8 md:h-8 border-2 border-black hover:bg-gray-200 text-black font-bold text-xs md:text-sm flex items-center justify-center cursor-pointer transition-colors duration-200"
                          >
                            ▼
                          </button>
                        </div>
                        <input
                          type="text"
                          inputMode="numeric"
                          value={quantities.alimasag}
                          onChange={(e) => onQuantityChange('alimasag', e.target.value.replace(/[^0-9]/g, ''))}
                          className="w-12 h-6 md:w-16 md:h-8 border-2 border-black text-center font-special-elite text-xs md:text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="font-special-elite text-xs md:text-sm text-black">KGS</span>
                      </div>
                      <span className="font-special-elite text-xs md:text-sm text-black text-center">(28 KGS available)</span>
                    </div>
                  </td>
                  <td className="border-2 border-black p-2 md:p-3 font-special-elite text-xs md:text-sm lg:text-base text-black">
                    ₱{(parseInt(quantities.alimasag) || 0) * 580}
                  </td>
                </tr>
              </>
            )}

            {/* Shellfish Category Total */}
            <tr>
              <td colSpan={3} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-right">
                SHELLFISH TOTAL:
              </td>
              <td className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black">
                ₱{((parseInt(quantities.sugpo) || 0) * 520) + ((parseInt(quantities.hipon) || 0) * 480) + ((parseInt(quantities.alimango) || 0) * 650) + ((parseInt(quantities.alimasag) || 0) * 580)}
              </td>
            </tr>

            {/* Grand Total Row */}
            <tr>
              <td colSpan={3} className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black text-right">
                GRAND TOTAL:
              </td>
              <td className="border-2 border-black p-2 md:p-3 font-special-elite font-bold text-xs md:text-sm lg:text-base text-black">
                ₱{
                  // Whole Fish Total
                  ((parseInt(quantities.bangus) || 0) * 220) + 
                  ((parseInt(quantities.tilapia) || 0) * 180) + 
                  ((parseInt(quantities.tamban) || 0) * 150) + 
                  ((parseInt(quantities.galunggong) || 0) * 200) +
                  // Mollusks Total
                  ((parseInt(quantities.tahong) || 0) * 120) + 
                  ((parseInt(quantities.talaba) || 0) * 280) + 
                  ((parseInt(quantities.halaan) || 0) * 160) + 
                  ((parseInt(quantities.scallop) || 0) * 350) +
                  // Cephalopods Total
                  ((parseInt(quantities.pusit) || 0) * 320) + 
                  ((parseInt(quantities['dagat-dagat']) || 0) * 380) + 
                  ((parseInt(quantities.pugita) || 0) * 450) + 
                  ((parseInt(quantities['pusit-lumot']) || 0) * 290) +
                  // Shellfish Total
                  ((parseInt(quantities.sugpo) || 0) * 520) + 
                  ((parseInt(quantities.hipon) || 0) * 480) + 
                  ((parseInt(quantities.alimango) || 0) * 650) + 
                  ((parseInt(quantities.alimasag) || 0) * 580)
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Make an Order Button */}
      <div className="mt-6 text-center">
        <button 
          className="text-white font-special-elite font-bold py-3 px-8 text-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-200 cursor-not-allowed"
          style={{backgroundColor: '#741714'}}
        >
          MAKE AN ORDER
        </button>
      </div>
    </div>
  );
}
