import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Special_Elite } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import MobileNavigation from "./components/MobileNavigation";
import DesktopNavigation from "./components/DesktopNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "BENGALS",
  description: "Fish Carrier - Premium seafood delivery since 2011",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${specialElite.variable} antialiased`}
      >
        <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
          <header className="max-w-7xl mx-auto border-t-4 border-l-4 border-r-4 border-black mt-4 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="w-full md:w-1/6">
              <div className="border-b-4 md:border-b-0 md:border-r-4 border-black h-32 md:h-32 p-4 md:p-4 flex items-center justify-center">
                <div className="hidden md:block">
                  <Image 
                    src="/images/logo.png" 
                    alt="Bengals Logo" 
                    width={160}
                    height={160}
                    className="h-32 md:h-24 lg:h-32 xl:h-40 w-auto max-w-full" 
                  />
                </div>
                <div className="md:hidden flex w-full">
                  <div className="w-[15%]"></div>
                  <div className="w-[70%] flex items-center justify-center">
                    <Image 
                      src="/images/logo.png" 
                      alt="Bengals Logo" 
                      width={160}
                      height={160}
                      className="h-32 md:h-24 lg:h-32 xl:h-40 w-auto max-w-full" 
                    />
                  </div>
                  <div className="w-[15%] flex flex-col">
                    <div className="h-4/5 flex items-center justify-center">
                      <Image 
                        src="/images/since.png" 
                        alt="Since 2011" 
                        width={96}
                        height={96}
                        className="h-16 sm:h-20 md:h-24 w-auto max-w-full" 
                      />
                    </div>
                    <div className="h-1/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="border-b-4 border-black md:border-b-0 h-40 md:h-32 pt-2 md:pt-5 pb-4 md:pb-0 flex flex-col items-center justify-center text-center">
                <div className="relative w-full h-16 md:h-24 flex items-center justify-center">
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '10%', top: '0px', transform: 'rotate(-15deg)' }}>B</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '22%', top: '5px', transform: 'rotate(-8deg)' }}>E</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '34%', top: '10px', transform: 'rotate(-2deg)' }}>N</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '46%', top: '15px', transform: 'rotate(0deg)' }}>G</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '58%', top: '10px', transform: 'rotate(2deg)' }}>A</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '70%', top: '5px', transform: 'rotate(8deg)' }}>L</span>
                  <span className={`${specialElite.className} text-5xl md:text-6xl font-black text-black absolute`} style={{ left: '82%', top: '0px', transform: 'rotate(15deg)' }}>S</span>
                </div>
                <p className="text-lg md:text-xl text-black font-thin italic tracking-wide mt-4">
                  Fish Carrier
                </p>

              </div>
            </div>
            <div className="hidden md:block w-full md:w-1/6">
              <div className="border-t-4 md:border-t-0 md:border-l-4 border-black h-16 md:h-32 pt-0 pb-2 px-2 md:p-4 flex items-center justify-center">
                <Image 
                  src="/images/since.png" 
                  alt="Since 2011" 
                  width={120}
                  height={120}
                  className="h-16 md:h-23 lg:h-30 xl:h-37 w-auto max-w-full" 
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 gap-4 md:gap-0">
            <MobileNavigation />
            <DesktopNavigation />
          </div>
        </header>
          </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
