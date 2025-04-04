'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

function DateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicleId');
  const locationId = searchParams.get('locationId');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate max date (6 months from today)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  const handleDateSubmit = () => {
    if (startDate && endDate) {
      router.push(`/rental/waiver?vehicleId=${vehicleId}&locationId=${locationId}&startDate=${startDate}&endDate=${endDate}`);
    }
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
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 2 ? 'bg-blue-600 text-white' : 
                  index < 2 ? 'bg-green-500 text-white' : 
                  'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 ${
                  index === 2 ? 'text-blue-600 font-medium' : 
                  index < 2 ? 'text-green-500' : 
                  'text-gray-500'
                }`}>{step}</span>
                {index < 5 && <div className="w-12 h-0.5 mx-2 bg-gray-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Select Your Dates</h1>
        <p className="text-xl text-gray-600 mb-8">Choose your rental period</p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start-date">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                min={today}
                max={maxDateStr}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  if (endDate && e.target.value > endDate) {
                    setEndDate(e.target.value);
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end-date">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                min={startDate || today}
                max={maxDateStr}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {startDate && endDate && (
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rental Duration</h3>
              <p className="text-gray-600">
                {Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24))} days
              </p>
            </div>
          )}

          <div className="mt-8 flex justify-between items-center">
            <Link
              href={`/rental/location?vehicleId=${vehicleId}`}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </Link>
            <button
              onClick={handleDateSubmit}
              disabled={!startDate || !endDate}
              className={`px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                startDate && endDate
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Continue to Waiver
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <p>© 2024 TrailShare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function DateSelection() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DateContent />
    </Suspense>
  );
} 