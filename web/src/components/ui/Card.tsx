"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  isHoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', isHoverable = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={isHoverable ? { y: -4, boxShadow: '0 8px 30px rgba(56, 56, 51, 0.05)' } : undefined}
        whileTap={isHoverable ? { scale: 0.98 } : undefined}
        className={`bg-[#fffcf7] rounded-xl border border-[rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 ${
          !isHoverable && 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        } ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';

export const CardImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  return (
    <div className="relative w-full overflow-hidden aspect-[4/5] bg-[#eae8e0]">
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`object-cover w-full h-full ${className}`}
        loading="lazy"
      />
    </div>
  );
};

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardSkeleton = () => {
  return (
    <div className="bg-[#fffcf7] rounded-xl border border-[rgba(0,0,0,0.03)] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
      <div className="w-full aspect-[4/5] bg-[#eae8e0] animate-pulse"></div>
      <div className="p-4 space-y-3">
        <div className="w-3/4 h-5 bg-[#eae8e0] rounded animate-pulse"></div>
        <div className="w-1/4 h-4 bg-[#eae8e0] rounded animate-pulse"></div>
      </div>
    </div>
  );
};
