import Footer from '../components/Footer';
import LocationMap from '../components/Location/LocationMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BENGALS',
  description: 'Get in touch with BENGALS Fish Carrier. Find our location, contact information, and business hours. We deliver fresh seafood since 2011.',
};

const ContactPage = () => {

  return (
    <div className="min-h-screen">
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="max-w-7xl mx-auto border-b-4 border-l-4 border-r-4 border-black">
          <div className="p-8">
            {/* Header and Description */}
            <div className="text-left p-6">
              <h1 className="font-special-elite font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-4">
                LOCAT<span style={{color: '#741714'}}>IONS</span>
              </h1>
              <p className="font-special-elite font-light text-xs md:text-sm lg:text-base text-black leading-relaxed">
                Find our locations and get in touch with us. We have multiple fish market locations serving different areas, each offering the freshest seafood from General Santos. Use the maps below to locate our nearest fish market or contact us for inquiries.
              </p>
            </div>
            
                         {/* Two Column Maps Section */}
             <div className="w-full mt-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 
                 {/* Left Map Column - Bulua Fish Landing */}
                 <LocationMap 
                   center={[8.512697902795162, 124.62216812329619]}
                   zoom={22}
                   title="BULUA FISH LANDING"
                   coloredTitle={
                     <>
                       BULUA FISH <span style={{color: '#741714'}}>LANDING</span>
                     </>
                   }
                   address="Opol–Bulua Bus Station Diversion Road"
                   addressLink="https://maps.app.goo.gl/1UcRubnddWfHmxix7"
                   openingHours={[
                     "Monday: 8-6",
                     "Tuesday: 8-6",
                     "Wednesday: 8-6",
                     "Thursday: 8-6",
                     "Friday: 8-6",
                     "Saturday: 8-6"
                   ]}
                 />

                 {/* Right Map Column - ISDAAN ni BENGALS */}
                 <LocationMap 
                   center={[8.497056, 124.601806]}
                   zoom={22}
                   title="ISDAAN ni BENGALS"
                   coloredTitle={
                     <>
                       ISDAAN ni <span style={{color: '#741714'}}>BENGALS</span>
                     </>
                   }
                   address="Road to Centro Iponan"
                   addressLink="https://maps.app.goo.gl/ehrpH4V71oT2Pemy8"
                   openingHours={[
                     "Monday: 8-6",
                     "Tuesday: 8-6",
                     "Wednesday: 8-6",
                     "Thursday: 8-6",
                     "Friday: 8-6",
                     "Saturday: 8-6"
                   ]}
                 />

               </div>
             </div>
            
            {/* Comic Image Section */}
            <div className="w-full mt-8">
              <div className="w-full border-2 border-black">
                {/* Mobile: comic-vertical.png, Desktop: comic-horizontal.jpg */}
                <img 
                  src="/images/contact/comic-vertical.png" 
                  alt="Comic Illustration" 
                  className="w-full h-auto object-cover md:hidden filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <img 
                  src="/images/contact/comic-horizontal.jpg" 
                  alt="Comic Illustration" 
                  className="w-full h-auto object-cover hidden md:block filter grayscale hover:grayscale-0 transition-all duration-300"
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

export default ContactPage;
