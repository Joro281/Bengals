'use client';
import { useState } from 'react';
import Footer from '../Footer';
import SeafoodSelectionTable from './SeafoodSelectionTable';

type ProductKey = 'bangus' | 'tilapia' | 'tamban' | 'galunggong' | 'tahong' | 'talaba' | 'halaan' | 'scallop' | 'pusit' | 'dagat-dagat' | 'pugita' | 'pusit-lumot' | 'sugpo' | 'hipon' | 'alimango' | 'alimasag';

const OrderForm = () => {
  const [quantities, setQuantities] = useState({
    bangus: '',
    tilapia: '',
    tamban: '',
    galunggong: '',
    tahong: '',
    talaba: '',
    halaan: '',
    scallop: '',
    pusit: '',
    'dagat-dagat': '',
    pugita: '',
    'pusit-lumot': '',
    sugpo: '',
    hipon: '',
    alimango: '',
    alimasag: ''
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

  const updateQuantity = (product: ProductKey, value: string) => {
    const numValue = parseInt(value) || 0;
    const maxStock = stockLimits[product];
    
    // If input exceeds max stock, set to max stock
    const finalValue = numValue > maxStock ? String(maxStock) : value;
    
    setQuantities(prev => ({
      ...prev,
      [product]: finalValue
    }));
  };

  const incrementQuantity = (product: ProductKey) => {
    const currentQty = parseInt(quantities[product]) || 0;
    const maxStock = stockLimits[product];
    
    // Only increment if not at max stock
    if (currentQty < maxStock) {
      setQuantities(prev => ({
        ...prev,
        [product]: String(currentQty + 1)
      }));
    }
  };

  const decrementQuantity = (product: ProductKey) => {
    setQuantities(prev => ({
      ...prev,
      [product]: String(Math.max(0, (parseInt(prev[product]) || 0) - 1))
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="max-w-7xl mx-auto border-b-4 border-l-4 border-r-4 border-black">
          <div className="p-8">
            {/* Header, Subheading and Image (Two Columns) */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Header + Subheading */}
                <div className="text-left">
                  <h1 className="font-special-elite font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-4">
                    ONLINE ORDERING <span style={{color: '#741714'}}>COMING SOON</span>
                  </h1>
                  <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed">
                    We're putting the finishing touches on our online ordering experience. In the meantime, feel free to reach us by phone or visit our market locations—fresh catch awaits.
                  </p>
                </div>
                {/* Right: Image */}
                <div className="w-full">
                  <img
                    src="/images/order/ship.png"
                    alt="Ship"
                    className="h-auto object-contain mx-auto w-full md:w-full lg:w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Seafood Selection Table */}
            <div className="p-6 mt-8">
              <div className="border-4 border-black ">
                <SeafoodSelectionTable
                  quantities={quantities}
                  onQuantityChange={updateQuantity}
                  onIncrement={incrementQuantity}
                  onDecrement={decrementQuantity}
                />
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default OrderForm;
