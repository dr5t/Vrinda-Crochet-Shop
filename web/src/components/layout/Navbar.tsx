"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { totalItems, setIsCartOpen } = useCart();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-[#eae8e0]">
        <Link href="/" className="font-headline text-xl font-bold tracking-tight text-[#383833]">
          Vrindaa Crochet
        </Link>
        <div className="flex items-center gap-4">
          <button className="text-[#81817a] hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative text-[#81817a] hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ae4025] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md px-12 py-5 items-center justify-between border-b border-[#eae8e0]">
        <div className="flex items-center gap-12">
          <Link href="/" className="font-headline text-2xl font-bold tracking-tight text-[#383833] ">
            Vrindaa Crochet
          </Link>
          <div className="flex gap-8">
            {['Home', 'Shop', 'Categories', 'Custom Orders', 'About'].map((item) => {
              const itemPath = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
              return (
                <Link 
                  key={item} 
                  href={itemPath}
                  className={`text-sm font-medium transition-colors hover:text-[#596859] ${pathname === itemPath ? 'text-[#596859]' : 'text-[#81817a]'}`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[#81817a] hover:text-[#596859] transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">search</span>
          </button>
          
          {user ? (
            <div className="flex items-center gap-3 bg-[#eae8e0]/50 py-1 pl-1 pr-3 rounded-full border border-[#bbb9b2]/50">
              <div className="w-7 h-7 rounded-full bg-[#596859] flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
                {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
              </div>
              <button 
                onClick={() => logout()} 
                className="material-symbols-outlined text-[#81817a] hover:text-[#ae4025] text-[18px] transition-colors"
                title="Logout"
              >
                logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-[#81817a] hover:text-[#596859] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px]">person</span>
            </Link>
          )}

          <button onClick={() => setIsCartOpen(true)} className="text-[#81817a] hover:text-[#596859] transition-colors flex items-center gap-2 relative">
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span className="text-sm font-medium">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -left-2 bg-[#ae4025] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
