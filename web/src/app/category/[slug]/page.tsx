"use client";

import React, { useState } from 'react';
import { Card, CardImage, CardContent } from '@/components/ui/Card';
import { Toggle } from '@/components/ui/Toggle';
import { Button } from '@/components/ui/Button';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const [inStockOnly, setInStockOnly] = useState(false);
  const [madeToOrder, setMadeToOrder] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-[#eae8e0] pb-6">
        <div>
          <h1 className="text-4xl font-headline mb-2">{categoryName}</h1>
          <p className="text-text-muted">Explore our handcrafted {categoryName.toLowerCase()} collection.</p>
        </div>
        
        {/* Filters Desktop */}
        <div className="hidden md:flex items-center gap-6 mt-6 md:mt-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">In Stock Only</span>
            <Toggle isOn={false} onToggle={() => {}} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Made to Order</span>
            <Toggle isOn={true} onToggle={() => {}} />
          </div>
          <select className="bg-transparent border border-[#eae8e0] rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#596859]">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Mock Product 1 */}
        <Card isHoverable>
          <div className="relative">
            <CardImage src="https://via.placeholder.com/400x500" alt="Product" />
            <div className="absolute top-3 left-3 bg-[#fffcf7] px-2 py-1 rounded text-xs font-semibold shadow-sm text-[#875858]">
              Made to Order
            </div>
          </div>
          <CardContent>
            <h3 className="font-semibold text-lg mb-1 truncate">Autumn Sweater</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#596859] font-bold">₹2,499</span>
              <Button size="sm" variant="ghost" className="!px-2 !h-8 rounded-full bg-[#eae8e0] hover:bg-[#bbb9b2]">
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              </Button>
            </div>
            <p className="text-[11px] text-text-muted mt-2">Ships in 5-7 days</p>
          </CardContent>
        </Card>

        {/* Mock Product 2 */}
        <Card isHoverable>
          <CardImage src="https://via.placeholder.com/400x500" alt="Product" />
          <CardContent>
            <h3 className="font-semibold text-lg mb-1 truncate">Classic Beanie</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-[#596859] font-bold">₹899</span>
              <Button size="sm" variant="ghost" className="!px-2 !h-8 rounded-full bg-[#eae8e0] hover:bg-[#bbb9b2]">
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              </Button>
            </div>
            <p className="text-[11px] text-emerald-600 mt-2 font-medium">In Stock</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </div>
  );
}
