import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-gray-300 dark:border-white/5">
      <div className="max-w-6xl px-6 mx-auto text-base text-center text-black-400 dark:text-gray-400">
        © {new Date().getFullYear()}{' '}
        <Link to="/admin-login" className="cursor-text">
          Segun Oladokun
        </Link>
        . Full-Stack Developer specializing in modern web technologies.
      </div>
    </footer>
  );
}