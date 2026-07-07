"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/context/CartContext';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState('Cream');
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-12 mt-20 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-[#eae8e0] rounded-2xl overflow-hidden relative">
            <img src="https://via.placeholder.com/600x750" alt="Product" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-[#fffcf7] px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm text-[#875858]">
              Made to Order
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-24 h-24 flex-shrink-0 bg-[#eae8e0] rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#596859]">
                <img src={`https://via.placeholder.com/150?text=Thumb+${i}`} alt="Thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-headline mb-2">Autumn Crochet Sweater</h1>
          <p className="text-2xl font-semibold text-[#596859] mb-4">₹2,499</p>
          
          <p className="text-text-muted mb-8 leading-relaxed">
            Cozy, warm, and entirely handcrafted. This sweater is woven with a premium acrylic-wool blend to keep you comfortable through the chilling breeze. Each piece takes roughly 15 hours of delicate craftsmanship.
          </p>

          {/* Variants */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wider text-[#81817a]">Color: <span className="text-[#383833]">{selectedColor}</span></h3>
            <div className="flex gap-3">
              {['Cream', 'Terracotta', 'Sage', 'Charcoal'].map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 focus:outline-none transition-all ${selectedColor === color ? 'border-[#596859] scale-110' : 'border-transparent hover:scale-105 shadow-sm'}`}
                  style={{
                    backgroundColor: color === 'Cream' ? '#fffcf7' : color === 'Terracotta' ? '#875858' : color === 'Sage' ? '#596859' : '#383833'
                  }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Custom Note */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-[#81817a]">Custom Request (Optional)</label>
            <textarea
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="E.g., Can you make the sleeves a bit longer?"
              className="w-full bg-[#eae8e0]/50 border border-[#bbb9b2] rounded-xl p-4 text-sm focus:outline-none focus:border-[#596859] resize-none"
              rows={3}
            />
          </div>

          {/* Action */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-[#eae8e0]">
            <div className="flex items-center border border-[#bbb9b2] rounded-full h-14 px-4 bg-white">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-medium w-8 h-8 flex items-center justify-center hover:bg-[#eae8e0] rounded-full">-</button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-medium w-8 h-8 flex items-center justify-center hover:bg-[#eae8e0] rounded-full">+</button>
            </div>
            <Button 
              className="flex-1 !h-14" 
              size="lg"
              onClick={() => addToCart({
                id: params.id,
                title: 'Autumn Crochet Sweater',
                price: 2499,
                images: ['https://via.placeholder.com/600x750']
              }, quantity, selectedColor, customNote)}
            >
              Add to Cart - ₹{2499 * quantity}
            </Button>
            <button className="w-14 h-14 flex items-center justify-center rounded-full border border-[#bbb9b2] hover:bg-[#eae8e0] transition-colors">
              <span className="material-symbols-outlined text-[24px] text-[#596859]">favorite</span>
            </button>
          </div>

          {/* Meta Info */}
          <ul className="space-y-4 text-sm text-[#65655e]">
            <li className="flex gap-3"><span className="material-symbols-outlined">schedule</span> <span><strong>Crafting Time:</strong> 5-7 business days</span></li>
            <li className="flex gap-3"><span className="material-symbols-outlined">local_shipping</span> <span><strong>Shipping:</strong> Free standard shipping across India</span></li>
            <li className="flex gap-3"><span className="material-symbols-outlined">laundry</span> <span><strong>Care:</strong> Hand wash cold, lay flat to dry</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
