'use client';
import Footer from '../components/Footer';
import ProductsThreeColumnLayout from '../components/ProductsThreeColumnLayout';

export default function ProductsPage() {
  const categories = ["WHOLEFISH", "MOLLUSKS", "CEPHALOPODS", "SHELLFISH"];

  return (
    <div className="min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="max-w-7xl mx-auto border-b-4 border-l-4 border-r-4 border-black">
                     <div className="p-8">
             {/* Header and Description */}
             <div className="text-left p-6">
               <h1 className="font-special-elite font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-4">
                 OUR SEAFOOD <span style={{color: '#741714'}}>SELECTION</span>
               </h1>
               <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed">
                 Discover our premium selection of fresh seafood categories. Navigate through different types using the TV controls below, from whole fish to mollusks, cephalopods, and shellfish. Each category represents the finest quality seafood we source and deliver. Click what&apos;s inside the TV to know more info.
               </p>
             </div>
             {/* Products content will go here */}
             <ProductsThreeColumnLayout
               categories={categories}
             />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
