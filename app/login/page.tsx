'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', { email, password });
    } else {
      console.log('Signing up with:', { name, email, password });
    }
  };

  return (
    // Main container now has a true black background (bg-black)
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      {/* Form container with a dark gray border and slightly lighter black/gray background */}
      <form 
        onSubmit={handleSubmit} 
        className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl w-80"
      >
        <h2 className="mb-6 text-2xl font-bold text-center tracking-tight">
          {isLogin ? 'Login' : 'Create Account'}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-4 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button 
          type="submit" 
          className="w-full p-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-500 transition-colors"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="mt-6 text-sm text-center text-zinc-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </form>
    </div>
  );
}
