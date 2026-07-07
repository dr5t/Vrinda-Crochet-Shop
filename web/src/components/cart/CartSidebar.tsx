"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#383833]/20 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#fffcf7] z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#eae8e0]">
              <h2 className="text-xl font-headline font-bold">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#eae8e0] transition-colors"
              >
                <span className="material-symbols-outlined text-[#81817a]">close</span>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center text-[#81817a] py-12">
                  <span className="material-symbols-outlined text-[48px] mb-4">shopping_bag</span>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-[#eae8e0] rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.product.images[0] || "https://via.placeholder.com/150"} alt={item.product.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-semibold text-[15px] leading-snug">{item.product.title}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-[#81817a] hover:text-[#ae4025]">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </div>
                        {item.variant && <p className="text-[13px] text-[#65655e] mt-1">Color: {item.variant}</p>}
                        {item.customNote && <p className="text-[11px] text-[#81817a] mt-1 italic line-clamp-1">Note: {item.customNote}</p>}
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#bbb9b2] rounded-full h-8 px-2 bg-white">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center hover:bg-[#eae8e0] rounded-full text-lg">-</button>
                          <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center hover:bg-[#eae8e0] rounded-full text-lg">+</button>
                        </div>
                        <span className="font-semibold text-[#596859]">₹{item.product.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#eae8e0] bg-white">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-[#65655e]">Subtotal</span>
                  <span className="text-xl font-bold text-[#383833]">₹{totalPrice}</span>
                </div>
                <p className="text-[12px] text-[#81817a] mb-6">Taxes and shipping calculated at checkout.</p>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full h-14 text-lg">Checkout</Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
