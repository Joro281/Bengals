import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About BENGALS - Fish Carrier',
  description: 'Learn about BENGALS Fish Carrier - your trusted seafood supplier since 2011. Discover our commitment to quality, freshness, and sustainable fishing practices.',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="max-w-7xl mx-auto border-b-4 border-l-4 border-r-4 border-black">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 ">
              {/* Left Section */}
              <div className="p-6 flex flex-col items-center justify-center md:col-span-2 order-2 md:order-1">
              <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-left max-w-md ">
                At Bengals, we carry the ocean's best — freshly caught fish, shrimp, crabs, and other premium seafood — straight from General Santos City. Every catch is carefully handled, packed, and delivered to our trusted partners in Cagayan de Oro, ensuring unmatched freshness and quality. From fishing boats to your kitchen or business, we bridge the sea's bounty to those who value only the finest.
              </p>
              <div className="flex justify-end w-full">
                <img 
                  src="/images/about/stamp.png" 
                  alt="Bengals Stamp" 
                  className="max-w-24 md:max-w-32 lg:max-w-36 h-auto"
                />
              </div>
            </div>
            
              {/* Right Section */}
              <div className="flex flex-col items-center justify-center p-6 md:col-span-3 order-1 md:order-2">
              <h1 className="font-special-elite text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black text-center tracking-wide md:tracking-wider lg:tracking-widest whitespace-nowrap">
                ALWAYS <span style={{color: '#741714'}}>FRESH</span> FISH
              </h1>
              <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black text-center leading-relaxed">
                direct from the shores of Gensan to the tables of CDO.
              </p>
              <img 
                src="/images/about/fish.png" 
                alt="Fresh Fish" 
                className="mt-4 mx-auto p-2 max-w-full h-auto max-h-48 md:max-h-64 lg:max-h-80"
              />
            </div>
            </div>
          </div>
        </div>
        
        {/* Second Container */}
        <div className="max-w-7xl mx-auto border-t-4 border-b-4 border-l-4 border-r-4 border-black mt-4">
          <div className="p-8">
            <div className="p-6">
            <div className="space-y-8">
              {/* Section 1: Heading */}
              <div className="p-4">
                <h2 className="font-special-elite text-lg md:text-2xl lg:text-3xl font-bold text-black text-left">
                  From Humble Beginnings to<br />
                  <span style={{color: '#741714'}}>Trusted Fish Carrier</span>
                </h2>
              </div>
              
              {/* Section 2: Paragraphs in a row */}
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:ml-16">
                  <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-left">
                    Bengals began in Cagayan de Oro as a small market stall run by a determined fish vendor, focused on selecting and selling the finest seafood while building customer trust.
                  </p>
                  <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-left">
                    The business expanded into a trusted fish carrier, sourcing premium seafood from General Santos and delivering it to CDO partners with the help of a dedicated team.
                  </p>
                </div>
              </div>
              
              {/* Section 3: Partner Image */}
              <div className="p-4 mt-4">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-20 gap-4 md:gap-8">
                  <div className="md:col-span-13">
                    <div className="flex flex-col items-center space-y-2">
                      <img 
                        src="/images/about/partner.png" 
                        alt="Bengals Partner" 
                        className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                        style={{ maxHeight: '70vh' }}
                      />
                      <div className="px-4 py-2">
                        <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-left">
                          We work closely with seasoned fishermen in Gensan who share our commitment to quality and sustainable fishing. Every catch is inspected, sorted, and immediately placed on ice to lock in freshness.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-7 flex flex-col items-center space-y-4">
                    <img 
                      src="/images/about/selection.png" 
                      alt="Bengals Selection" 
                      className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                </div>
                
                {/* Mobile Layout - Vertical Stack */}
                <div className="md:hidden flex flex-col items-center space-y-4">
                  <img 
                    src="/images/about/partner.png" 
                    alt="Bengals Partner" 
                    className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                    style={{ maxHeight: '70vh' }}
                  />
                  <img 
                    src="/images/about/selection.png" 
                    alt="Bengals Selection" 
                    className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                    style={{ maxHeight: '70vh' }}
                  />
                  <div className="px-4 py-2">
                    <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-left">
                      We work closely with seasoned fishermen in Gensan who share our commitment to quality and sustainable fishing. Every catch is inspected, sorted, and immediately placed on ice to lock in freshness.
                    </p>
                  </div>
                </div>
                
                {/* Transport and Delivery Images Row */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/about/transport.png" 
                      alt="Bengals Transport" 
                      className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src="/images/about/delivery.png" 
                      alt="Bengals Delivery" 
                      className="h-auto w-full max-w-full object-contain grayscale saturate-0 hover:grayscale-0 hover:saturate-100 transition-all duration-300"
                      style={{ maxHeight: '70vh' }}
                    />
                  </div>
                </div>
                
                {/* Delivery Description Paragraph */}
                <div className="mt-4 px-4">
                  <p className="italic text-xs md:text-sm lg:text-base text-black leading-relaxed text-center">
                    Our refrigerated carriers move the seafood quickly from Gensan to Cagayan de Oro — no delays, no compromise. From restaurants to seafood resellers, we deliver directly to trusted clients who expect nothing less than the freshest catch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;