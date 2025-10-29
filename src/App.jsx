import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutExperience from './components/AboutExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          dark ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-black'
        } transition-colors duration-300`}
      >
        <Header dark={dark} toggleDark={() => setDark((s) => !s)} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutExperience />
                  <Skills dark={dark} />
                  <Projects dark={dark} />
                  <Contact dark={dark} />
                </>
              }
            />
            <Route path="/admin-login" element={<AdminLogin dark={dark} />} />
            <Route path="/admin-dashboard" element={<AdminDashboard dark={dark} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}






