'use client';

import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
      <div 
        className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
} 