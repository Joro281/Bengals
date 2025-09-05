'use client';
import { Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Second Container */}
      <div className="max-w-7xl mx-auto border-t-4 border-b-4 border-l-4 border-r-4 border-black mt-4 mb-4">
        <div className="p-4">
          {/* Special Request Banner */}
          <div className="grid grid-cols-1 md:grid-cols-20 gap-4 md:gap-8 items-center">
            {/* Left Text - 30% */}
            <div className="md:col-span-6 text-center md:text-left p-4 md:p-6 order-first md:order-none">
              <h2 className="font-special-elite font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black">
                HAVE SPECIAL <span className="text-[#741714]">REQUEST?</span>
              </h2>
            </div>
            
            {/* Center Image - 30% */}
            <div className="md:col-span-6 flex justify-center order-2 md:order-none">
              <img 
                src="/images/scuba.png" 
                alt="Scuba Diving Helmet" 
                className="h-auto w-56 md:w-44 lg:w-48 xl:w-56 object-contain"
              />
            </div>
            
            {/* Right Text - 40% */}
            <div className="md:col-span-8 text-center flex flex-col items-center justify-start space-y-4 md:space-y-6 p-4 md:p-6 order-last md:order-none">
              <h2 className="font-special-elite font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black whitespace-nowrap">
                GET IN <span className="text-[#741714]">TOUCH</span>
              </h2>
              
              {/* Contact Information */}
              <div className="flex flex-col items-center space-y-3 md:space-y-4">
                {/* Facebook */}
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-[#741714]" />
                  <span className="font-special-elite text-sm md:text-base lg:text-lg text-black">Bengals Fish Carrier</span>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#741714]" />
                  <span className="font-special-elite text-sm md:text-base lg:text-lg text-black">info@bengals.com</span>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#741714]" />
                  <span className="font-special-elite text-sm md:text-base lg:text-lg text-black">+63 912 345 6789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Spacing */}
      <div className="h-0.5"></div>
    </>
  );
}
