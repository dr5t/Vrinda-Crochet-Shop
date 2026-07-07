"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-20 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-2xl border border-[#eae8e0] shadow-sm mb-6">
            <div className="w-16 h-16 rounded-full bg-[#596859] flex items-center justify-center text-white font-headline text-2xl mx-auto mb-4">
              {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-center font-bold text-lg">{user.displayName || 'Vrindaa Guest'}</h2>
            <p className="text-center text-[#65655e] text-sm mb-6">{user.email}</p>
            
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-2 rounded-lg bg-[#596859]/10 text-[#596859] font-medium">Orders</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-[#eae8e0]/50 text-[#65655e]">Wishlist</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-[#eae8e0]/50 text-[#65655e]">Addresses</a>
              <a href="#" className="block px-4 py-2 rounded-lg hover:bg-[#eae8e0]/50 text-[#65655e]">Settings</a>
            </nav>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full text-[#ae4025] hover:bg-[#ae4025]/10 border-[#ae4025]/20"
            onClick={async () => {
              await logout();
              router.push('/');
            }}
          >
            Sign Out
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-headline font-bold mb-8">Your Orders</h1>
          
          <div className="space-y-6">
            {/* Empty State / Mock Order */}
            <div className="bg-white border border-[#eae8e0] rounded-2xl p-6">
              <div className="flex justify-between items-start border-b border-[#eae8e0] pb-4 mb-4">
                <div>
                  <p className="text-sm text-[#81817a]">Order #VR-1092</p>
                  <p className="font-semibold mt-1">Placed on October 12, 2023</p>
                </div>
                <span className="bg-[#596859]/10 text-[#596859] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Processing</span>
              </div>
              
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-[#eae8e0] rounded-xl flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium">Autumn Crochet Sweater</h3>
                  <p className="text-sm text-[#65655e]">Color: Terracotta</p>
                  <p className="font-bold mt-2">₹2,499</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#eae8e0] flex justify-end">
                <Button variant="outline" size="sm">Track Order</Button>
              </div>
            </div>
            
            <div className="bg-[#fffcf7] border border-[#eae8e0] border-dashed rounded-2xl p-12 text-center text-[#81817a]">
              <p>You have no more past orders.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
