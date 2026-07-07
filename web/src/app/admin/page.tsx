"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Toggle } from '@/components/ui/Toggle';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('orders');

  return (
    <div className="min-h-screen bg-[#eae8e0]/30 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold text-[#383833]">Admin Dashboard</h1>
            <p className="text-[#65655e] mt-1">Manage Vrindaa Crochet products and orders.</p>
          </div>
          <Button>+ Add Product</Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-[#bbb9b2] mb-8">
          <button 
            onClick={() => setActiveTab('orders')} 
            className={`pb-4 px-2 font-medium text-sm transition-colors ${activeTab === 'orders' ? 'border-b-2 border-[#596859] text-[#383833]' : 'text-[#81817a] hover:text-[#383833]'}`}
          >
            Recent Orders
          </button>
          <button 
            onClick={() => setActiveTab('products')} 
            className={`pb-4 px-2 font-medium text-sm transition-colors ${activeTab === 'products' ? 'border-b-2 border-[#596859] text-[#383833]' : 'text-[#81817a] hover:text-[#383833]'}`}
          >
            Product Catalog
          </button>
        </div>

        {/* Content */}
        {activeTab === 'orders' ? (
          <div className="bg-white rounded-2xl shadow-sm border border-[#eae8e0] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#eae8e0]/50 text-[#65655e] text-sm">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Total</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { id: 'VR-1092', name: 'Aditi Sharma', date: 'Oct 12', total: 2499, status: 'Processing', color: 'text-[#596859]', bg: 'bg-[#596859]/10' },
                  { id: 'VR-1091', name: 'Rohan Verma', date: 'Oct 10', total: 899, status: 'Shipped', color: 'text-[#6c6450]', bg: 'bg-[#6c6450]/10' },
                  { id: 'VR-1090', name: 'Sneha Patel', date: 'Oct 08', total: 4500, status: 'Delivered', color: 'text-[#81817a]', bg: 'bg-[#81817a]/10' },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-[#eae8e0] hover:bg-[#eae8e0]/20 transition-colors">
                    <td className="p-4 font-medium">{order.id}</td>
                    <td className="p-4">{order.name}</td>
                    <td className="p-4">{order.date}</td>
                    <td className="p-4">₹{order.total}</td>
                    <td className="p-4">
                      <span className={`${order.bg} ${order.color} px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-[#596859] hover:underline font-medium">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-[#eae8e0] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#eae8e0]/50 text-[#65655e] text-sm">
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Made to Order</th>
                  <th className="p-4 font-medium">Stock</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: 'Autumn Crochet Sweater', price: 2499, mto: true, stock: '∞' },
                  { name: 'Classic Beanie', price: 899, mto: false, stock: '12' },
                  { name: 'Daisy Tote Bag', price: 1299, mto: true, stock: '∞' },
                ].map((product) => (
                  <tr key={product.name} className="border-b border-[#eae8e0] hover:bg-[#eae8e0]/20 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#eae8e0] rounded-md overflow-hidden"></div>
                      <span className="font-medium">{product.name}</span>
                    </td>
                    <td className="p-4">₹{product.price}</td>
                    <td className="p-4">
                      <Toggle isOn={product.mto} onToggle={() => {}} />
                    </td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4 text-right">
                      <button className="text-[#81817a] hover:text-[#383833] mx-2"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="text-[#81817a] hover:text-[#ae4025] mx-2"><span className="material-symbols-outlined text-[18px]">delete</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
