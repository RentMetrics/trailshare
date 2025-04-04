'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Location {
  id: number;
  name: string;
  address: string;
  image: string;
  description: string;
  availableVehicles: number[];
}

function LocationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicleId');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: 1,
      name: 'Mountain View Marina',
      address: '123 Lake Drive, Mountain View, CA',
      image: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?q=80&w=1000',
      description: 'Perfect launching point for lake adventures',
      availableVehicles: [1, 2, 3, 4]
    },
    {
      id: 2,
      name: 'Alpine Adventure Base',
      address: '456 Mountain Road, Boulder, CO',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000',
      description: 'Prime location for mountain and snow activities',
      availableVehicles: [3, 4]
    },
    {
      id: 3,
      name: 'Desert Trails Outpost',
      address: '789 Desert Trail, Moab, UT',
      image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000',
      description: 'Gateway to amazing desert trail systems',
      availableVehicles: [2, 4]
    },
    {
      id: 4,
      name: 'Coastal Adventure Center',
      address: '321 Coast Highway, Newport, OR',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000',
      description: 'Beautiful coastal location for water activities',
      availableVehicles: [1, 2]
    }
  ];

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    router.push(`/rental/dates?vehicleId=${vehicleId}&locationId=${location.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-400 to-blue-600 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">TrailShare</Link>
            <div className="ml-12 space-x-8">
              <Link href="/profile" className="text-white hover:text-blue-100">PROFILE</Link>
              <Link href="/rentals" className="text-white hover:text-blue-100">RENTALS</Link>
              <Link href="/specials" className="text-white hover:text-blue-100">SPECIALS</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Steps */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-4">
            {['Vehicle', 'Location', 'Dates', 'Waiver', 'Payment', 'Confirmation'].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 1 ? 'bg-blue-600 text-white' : index < 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {index + 1}
                </div>
                <span className={`ml-2 ${index === 1 ? 'text-blue-600 font-medium' : index < 1 ? 'text-green-500' : 'text-gray-500'}`}>{step}</span>
                {index < 5 && <div className="w-12 h-0.5 mx-2 bg-gray-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Selection */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Select Pickup Location</h1>
        <p className="text-xl text-gray-600 mb-8">Choose from our available locations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleLocationSelect(location)}
            >
              <div className="relative h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  quality={95}
                  priority={location.id <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
                  <p className="text-sm opacity-90">{location.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <p>© 2024 TrailShare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function LocationSelection() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LocationContent />
    </Suspense>
  );
} 