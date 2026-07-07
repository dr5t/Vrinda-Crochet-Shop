"use client";

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();
  const [shippingDetails, setShippingDetails] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '', pincode: ''
  });
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Proceeding with ${paymentMethod === 'cod' ? 'Cash on Delivery' : 'Razorpay'}...`);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 mt-20 text-center max-w-lg">
        <span className="material-symbols-outlined text-[64px] text-[#bbb9b2] mb-6">shopping_bag</span>
        <h1 className="text-3xl font-headline font-bold mb-4">Your cart is empty</h1>
        <p className="text-[#65655e] mb-8">Looks like you haven&apos;t added anything to your cart yet. Let&apos;s find you something special.</p>
        <Link href="/">
          <Button size="lg" className="w-full">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-20 max-w-5xl">
      <h1 className="text-3xl font-headline font-bold mb-10">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <div className="flex-1">
          <form onSubmit={handleCheckout} className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81817a]">contact_mail</span> Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.name} onChange={e => setShippingDetails({...shippingDetails, name: e.target.value})} />
                <input required type="email" placeholder="Email Address" className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.email} onChange={e => setShippingDetails({...shippingDetails, email: e.target.value})} />
                <input required type="tel" placeholder="Phone Number (for delivery updates)" className="w-full md:col-span-2 bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.phone} onChange={e => setShippingDetails({...shippingDetails, phone: e.target.value})} />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81817a]">local_shipping</span> Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Street Address / Flat No." className="w-full md:col-span-2 bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.address} onChange={e => setShippingDetails({...shippingDetails, address: e.target.value})} />
                <input required placeholder="City" className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.city} onChange={e => setShippingDetails({...shippingDetails, city: e.target.value})} />
                <div className="flex gap-4">
                  <input required placeholder="State" className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.state} onChange={e => setShippingDetails({...shippingDetails, state: e.target.value})} />
                  <input required placeholder="PIN Code" className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]" value={shippingDetails.pincode} onChange={e => setShippingDetails({...shippingDetails, pincode: e.target.value})} />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#81817a]">payments</span> Payment Method
              </h2>
              <div className="space-y-4">
                <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'razorpay' ? 'border-[#596859] bg-[#596859]/5' : 'border-[#bbb9b2] bg-[#eae8e0]/30'}`}>
                  <input type="radio" name="payment" value="razorpay" checked={paymentMethod === 'razorpay'} onChange={() => setPaymentMethod('razorpay')} className="w-4 h-4 text-[#596859] focus:ring-[#596859]" />
                  <div>
                    <h3 className="font-semibold text-sm">Pay Online (UPI, Cards, NetBanking)</h3>
                    <p className="text-xs text-[#65655e]">Securely pay via Razorpay</p>
                  </div>
                </label>
                <label className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#596859] bg-[#596859]/5' : 'border-[#bbb9b2] bg-[#eae8e0]/30'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-4 h-4 text-[#596859] focus:ring-[#596859]" />
                  <div>
                    <h3 className="font-semibold text-sm">Cash on Delivery (COD)</h3>
                    <p className="text-xs text-[#65655e]">Pay when your order arrives</p>
                  </div>
                </label>
              </div>
            </section>

            <Button type="submit" size="lg" className="w-full !h-14 mt-8">
              Place Order — ₹{totalPrice}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-[#eae8e0]/30 border border-[#eae8e0] rounded-2xl p-6 sticky top-28">
            <h2 className="text-lg font-semibold mb-6 pb-4 border-b border-[#bbb9b2]">Order Summary</h2>
            <div className="space-y-6 mb-6 pb-6 border-b border-[#bbb9b2] max-h-[400px] overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-[#eae8e0] rounded-lg overflow-hidden flex-shrink-0 border border-[#bbb9b2]/50">
                    <Image src={item.product.images[0] || "https://via.placeholder.com/150"} alt={item.product.title} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm leading-tight">{item.product.title}</h3>
                    {item.variant && <p className="text-[11px] text-[#65655e] mt-1">Color: {item.variant}</p>}
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span className="text-[#81817a]">Qty: {item.quantity}</span>
                      <span className="font-semibold">₹{item.product.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 text-sm text-[#65655e] mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-700 font-medium">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-lg font-bold text-[#383833] pt-4 border-t border-[#bbb9b2]">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
