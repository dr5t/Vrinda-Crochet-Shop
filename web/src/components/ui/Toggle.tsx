"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={() => !disabled && onToggle()}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#596859] focus-visible:ring-offset-2 ${
        isOn ? 'bg-[#596859]' : 'bg-[#bbb9b2]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      role="switch"
      aria-checked={isOn}
    >
      <motion.span
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
};
