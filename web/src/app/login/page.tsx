"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/profile');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to login');
      } else {
        setError('Failed to login');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 mt-16">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-card border border-[#eae8e0]">
        <h1 className="text-3xl font-headline font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-[#81817a] text-center mb-8 text-sm">Sign in to access your custom orders and wishlist.</p>

        {error && <div className="bg-[#ae4025]/10 text-[#ae4025] p-3 rounded-lg text-sm mb-6">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#65655e]">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-[#65655e]">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#eae8e0]/30 border border-[#bbb9b2] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#596859]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end">
            <Link href="#" className="text-xs text-[#596859] hover:underline">Forgot password?</Link>
          </div>

          <Button type="submit" className="w-full !h-12 mt-4" isLoading={loading}>
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm text-[#81817a] mt-8">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#596859] font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
