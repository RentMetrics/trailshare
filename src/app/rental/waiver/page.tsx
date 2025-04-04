'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function WaiverContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicleId');
  const locationId = searchParams.get('locationId');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  const [isAgreed, setIsAgreed] = useState(false);
  const [hasReadWaiver, setHasReadWaiver] = useState(false);

  const handleContinue = () => {
    if (isAgreed) {
      router.push(`/rental/payment?vehicleId=${vehicleId}&locationId=${locationId}&startDate=${startDate}&endDate=${endDate}`);
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
                  index === 3 ? 'bg-blue-600 text-white' : 
                  index < 3 ? 'bg-green-500 text-white' : 
                  'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 ${
                  index === 3 ? 'text-blue-600 font-medium' : 
                  index < 3 ? 'text-green-500' : 
                  'text-gray-500'
                }`}>{step}</span>
                {index < 5 && <div className="w-12 h-0.5 mx-2 bg-gray-200"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waiver Content */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Rental Agreement & Waiver</h1>
        <p className="text-xl text-gray-600 mb-8">Please read and accept our rental terms and conditions</p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
            <div className="h-64 overflow-y-auto bg-gray-50 p-6 rounded-lg mb-6 text-gray-700">
              <h3 className="font-semibold mb-3">1. Rental Agreement</h3>
              <p className="mb-4">By accepting this agreement, you acknowledge that you are responsible for the safe operation and return of the rented equipment.</p>
              
              <h3 className="font-semibold mb-3">2. Safety Requirements</h3>
              <p className="mb-4">You agree to follow all safety guidelines and wear appropriate safety equipment at all times during the rental period.</p>
              
              <h3 className="font-semibold mb-3">3. Liability</h3>
              <p className="mb-4">You assume all risks associated with the use of the rental equipment and agree to hold TrailShare harmless from any claims.</p>
              
              <h3 className="font-semibold mb-3">4. Damage and Loss</h3>
              <p className="mb-4">You are responsible for any damage to or loss of the equipment during the rental period.</p>
              
              <h3 className="font-semibold mb-3">5. Insurance</h3>
              <p>You must provide proof of insurance or purchase additional coverage for the rental period.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="read-waiver"
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={hasReadWaiver}
                onChange={(e) => setHasReadWaiver(e.target.checked)}
              />
              <label htmlFor="read-waiver" className="text-gray-700">
                I have read and understood the rental agreement
              </label>
            </div>
            
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="accept-waiver"
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                disabled={!hasReadWaiver}
              />
              <label htmlFor="accept-waiver" className="text-gray-700">
                I accept the terms and conditions
              </label>
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Link
              href={`/rental/dates?vehicleId=${vehicleId}&locationId=${locationId}&startDate=${startDate}&endDate=${endDate}`}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </Link>
            <button
              onClick={handleContinue}
              disabled={!isAgreed}
              className={`px-8 py-3 rounded-lg text-white font-medium transition-colors ${
                isAgreed ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Continue to Payment
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

export default function WaiverPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <WaiverContent />
    </Suspense>
  );
} 