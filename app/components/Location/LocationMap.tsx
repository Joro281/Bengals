'use client';
import { useEffect, useRef } from 'react';

interface LocationMapProps {
  center: [number, number];
  zoom: number;
  title: string;
  coloredTitle?: React.ReactNode;
  address: string;
  addressLink: string;
  openingHours: string[];
}

export default function LocationMap({ 
  center, 
  zoom, 
  title, 
  coloredTitle,
  address, 
  addressLink, 
  openingHours 
}: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    // Check if map is already initialized
    if (mapInstance.current) {
      return;
    }

    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Load Leaflet JavaScript
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    
    script.onload = () => {
      // @ts-ignore - Leaflet is loaded globally
      const L = window.L;
      
      // Custom map style inspired by light green pastel styling
      const customStyle = {
        backgroundColor: '#e8f5e8', // Light green background
        color: '#2d5016', // Dark green text
        weight: 1
      };

      // Initialize map
      if (mapRef.current && !mapInstance.current) {
        try {
          mapInstance.current = L.map(mapRef.current, {
            center: center,
            zoom: zoom,
            zoomControl: true,
            attributionControl: false,
            scrollWheelZoom: false
          });

          // Custom tile layer with warm colors
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            className: 'custom-map-style'
          }).addTo(mapInstance.current);

          // PNG X marker
          const marker = L.divIcon({
            className: 'custom-red-x-marker',
            html: '<img src="/images/contact/xmark.png" alt="X Marks the Spot" style="width: 35px; height: 35px; filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.6));" />',
            iconSize: [35, 35],
            iconAnchor: [17.5, 17.5]
          });
          
          L.marker(center, { icon: marker }).addTo(mapInstance.current);

          // Apply custom styling
          mapInstance.current.getContainer().style.backgroundColor = customStyle.backgroundColor;
        } catch (error) {
          console.error('Error initializing map:', error);
        }
      }

      // Add custom CSS for map styling
      const style = document.createElement('style');
      style.textContent = `
        .custom-map-style {
          filter: sepia(0.3) hue-rotate(30deg) saturate(1.2) brightness(1.1);
        }

        .leaflet-control-zoom a {
          background: linear-gradient(135deg, #d4b78f 0%, #e4c79f 50%, #d4b78f 100%) !important;
          color: #2d5016 !important;
          border: 2px solid #8b4513 !important;
          border-radius: 6px !important;
          font-weight: bold !important;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.8) !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        .leaflet-control-zoom a:hover {
          background: linear-gradient(135deg, #e4c79f 0%, #f4d7af 50%, #e4c79f 100%) !important;
          transform: scale(1.05) !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-container {
          background: #e8f5e8 !important;
        }
      `;
      document.head.appendChild(style);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup map
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      
      // Cleanup resources
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [center, zoom]);

  return (
    <div className="text-left">
      <h3 className="font-special-elite font-bold text-lg md:text-xl lg:text-2xl text-black mb-4">
        {coloredTitle || title}
      </h3>
      <div className="w-full h-[400px] border-2 border-black">
        <div ref={mapRef} className="w-full h-full"></div>
      </div>
      
      {/* Location Details */}
      <div className="p-4 border-l-2 border-r-2 border-b-2 border-black">
        <div className="space-y-3">
          <div>
            <a 
              href={addressLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-special-elite font-bold text-sm md:text-base lg:text-lg text-black leading-relaxed hover:text-[#741714] transition-colors duration-200 cursor-pointer"
            >
              {address}
            </a>
          </div>
          
          <div>
            <h4 className="font-special-elite font-light text-sm md:text-base text-black mb-2">Opening hours:</h4>
            <div className="grid grid-cols-2 gap-2">
              {openingHours.map((hour, index) => (
                <div key={index} className="font-special-elite font-light text-xs md:text-sm text-black">
                  {hour}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
