import React from 'react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardImage, CardContent } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Vrindaa Crochet | Handcrafted with Intention',
  description: 'Warm, soft, and beautifully handmade crochet items. Shop custom amigurumi, cozy sweaters, and delicate home decor crafted with love in India.',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 mt-20 max-w-6xl">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center mb-24">
        <span className="text-[#875858] font-bold tracking-widest text-sm uppercase mb-4">Welcome to our studio</span>
        <h1 className="text-5xl md:text-7xl font-headline text-[#383833] mb-6 leading-tight">Handcrafted with <br/>Intention</h1>
        <p className="text-xl text-[#65655e] mb-10 max-w-2xl leading-relaxed">Warm, soft, and made just for you. Explore our collection of handmade crochet goods crafted with sustainable yarns and endless love.</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg" className="px-8 shadow-sm">Shop Collection</Button>
          <Button variant="outline" size="lg" className="px-8 bg-white/50 backdrop-blur-sm">Request Custom Order</Button>
        </div>
      </div>

      <div className="mb-8 flex justify-between items-end">
        <h2 className="text-3xl font-headline font-bold text-[#383833]">Featured Magic</h2>
        <a href="/category/all" className="text-[#596859] font-semibold hover:underline hidden sm:block">View all items →</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Card isHoverable className="border border-[#eae8e0] shadow-sm">
          <CardImage src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop" alt="Autumn Crochet Sweater" className="aspect-[4/5] object-cover" />
          <CardContent className="bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-[#383833]">Autumn Sweater</h3>
              <span className="text-[#596859] font-bold">₹2,499</span>
            </div>
            <p className="text-[#81817a] text-sm">Made to order • 100% Cotton</p>
          </CardContent>
        </Card>

        <Card isHoverable className="border border-[#eae8e0] shadow-sm">
          <CardImage src="https://images.unsplash.com/photo-1511270339343-bc8516029822?q=80&w=1080&auto=format&fit=crop" alt="Classic Beanie" className="aspect-[4/5] object-cover" />
          <CardContent className="bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-[#383833]">Classic Beanie</h3>
              <span className="text-[#596859] font-bold">₹899</span>
            </div>
            <p className="text-[#81817a] text-sm">Ready to ship • Wool Blend</p>
          </CardContent>
        </Card>

        <Card isHoverable className="border border-[#eae8e0] shadow-sm">
          <CardImage src="https://images.unsplash.com/photo-1615486511484-92e175cca4ee?q=80&w=1080&auto=format&fit=crop" alt="Amigurumi Bear" className="aspect-[4/5] object-cover" />
          <CardContent className="bg-white">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-[#383833]">Custom Amigurumi</h3>
              <span className="text-[#596859] font-bold">₹1,200</span>
            </div>
            <p className="text-[#81817a] text-sm">Made to order • Customizable</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 text-center sm:hidden">
        <a href="/category/all" className="text-[#596859] font-semibold hover:underline">View all items →</a>
      </div>
    </div>
  );
}
