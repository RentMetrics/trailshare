'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface Vehicle {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function Vehicles() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Wakeboard Boat',
      price: '$299/day',
      image: '/images/vehicles/boats/Yamaha_Boats.png',
      description: 'Perfect for wakeboarding and water sports enthusiasts'
    },
    {
      id: 2,
      name: 'Pontoon Boat',
      price: '$199/day',
      image: '/images/vehicles/boats/Pontoon_Boat.png',
      description: 'Ideal for family outings and leisurely lake cruises'
    },
    {
      id: 3,
      name: 'UTV Pro',
      price: '$249/day',
      image: '/images/vehicles/utvs/UTV_Pro.png',
      description: 'Powerful off-road vehicle for mountain adventures'
    },
    {
      id: 4,
      name: 'Side-by-Side',
      price: '$279/day',
      image: '/images/vehicles/utvs/SidebySide_RZR.png',
      description: 'Comfortable and capable for trail exploration'
    },
    {
      id: 5,
      name: 'Snowmobile Sport',
      price: '$199/day',
      image: '/images/vehicles/snowmobiles/Ski-Doo Summit.png',
      description: 'Thrilling winter adventures await'
    },
    {
      id: 6,
      name: 'Snowmobile Touring',
      price: '$229/day',
      image: '/images/vehicles/snowmobiles/Snowmobile_Touring.png',
      description: 'Comfortable and powerful for long winter rides'
    }
  ];

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    router.push(`/rental/location?vehicleId=${vehicle.id}`);
  };

  const handleImageError = (vehicleId: number) => {
    console.log(`Failed to load image for vehicle ${vehicleId}`);
    setImageErrors(prev => ({
      ...prev,
      [vehicleId]: true
    }));
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
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {index + 1}
                </div>
                <span className={`ml-2 ${index === 0 ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step}</span>
                {index < 5 && <div className="w-12 h-0.5 mx-2 bg-gray-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Select Your Vehicle</h1>
        <p className="text-xl text-gray-600 mb-8">Choose from our premium selection of adventure vehicles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleVehicleSelect(vehicle)}
            >
              <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                {!imageErrors[vehicle.id] ? (
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={300}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    quality={95}
                    onError={() => {
                      console.log(`Image error for ${vehicle.name}:`, vehicle.image);
                      handleImageError(vehicle.id);
                    }}
                    priority={vehicle.id <= 2}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Image not available</span>
                    <span className="text-xs mt-1 text-gray-500">{vehicle.image}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h2>
                    <p className="text-gray-600">{vehicle.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{vehicle.price}</div>
                    <div className="text-sm text-gray-500">per day</div>
                  </div>
                </div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                  onClick={() => handleVehicleSelect(vehicle)}
                >
                  SELECT VEHICLE
                </button>
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