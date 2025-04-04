'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  // Mock user data - in a real app, this would come from an API or database
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    address: '123 Trail Street, Adventure City, AC 12345',
    profileImage: 'https://placehold.co/200x200/1e40af/ffffff.png?text=JD',
    rentals: [
      {
        id: 1,
        vehicle: 'RZR Pro R Ultimate',
        date: '2024-03-15',
        duration: '2 days',
        status: 'Completed',
        total: '$878'
      },
      {
        id: 2,
        vehicle: 'RZR Trail S',
        date: '2024-02-28',
        duration: '1 day',
        status: 'Completed',
        total: '$189'
      },
      {
        id: 3,
        vehicle: 'RZR XP 1000',
        date: '2024-04-01',
        duration: '3 days',
        status: 'Upcoming',
        total: '$897'
      }
    ],
    preferences: {
      notifications: true,
      newsletter: true,
      marketing: false,
      language: 'English',
      currency: 'USD'
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
          <Link href="/vehicles" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium">
            HIT THE TRAIL
          </Link>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={user.profileImage}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>
                <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-gray-900">{user.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <p className="mt-1 text-gray-900">{user.address}</p>
              </div>
            </div>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
              Update Information
            </button>
          </div>

          {/* Rental History */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rental History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {user.rentals.map((rental) => (
                    <tr key={rental.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rental.vehicle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rental.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rental.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          rental.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {rental.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rental.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                  <p className="text-sm text-gray-500">Receive updates about your rentals and account</p>
                </div>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  user.preferences.notifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    user.preferences.notifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Newsletter</label>
                  <p className="text-sm text-gray-500">Receive our monthly newsletter with updates and tips</p>
                </div>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  user.preferences.newsletter ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    user.preferences.newsletter ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Marketing Emails</label>
                  <p className="text-sm text-gray-500">Receive promotional offers and special deals</p>
                </div>
                <button className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  user.preferences.marketing ? 'bg-blue-600' : 'bg-gray-200'
                }`}>
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    user.preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Update Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100 py-8 text-center text-gray-600 mt-12">
        <p>© 2024 TrailShare. All rights reserved.</p>
      </footer>
    </div>
  );
} 