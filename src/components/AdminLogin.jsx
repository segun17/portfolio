import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin({ dark }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portifolio-server-3oco.onrender.com/api/admin/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError('Invalid credentials');
    }
  };

  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-md px-6 mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Admin Login</h2>
          <p className="mt-2 text-2xl text-black-400 dark:text-gray-400">
            Sign in to manage your projects
          </p>
        </div>
        <div
          className={`p-6 rounded-xl ${
            dark ? 'bg-white/5' : 'bg-gray-200 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <form onSubmit={handleLogin} className="grid grid-cols-1 gap-4">
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-md border border-[#555] text-sm placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white rounded-md bg-gradient-to-r from-violet-600 to-cyan-400"
            >
              Login
            </button>
          </form>
          {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
}