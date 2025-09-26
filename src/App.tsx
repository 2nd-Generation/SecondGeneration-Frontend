import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Class from './pages/Class';
import Teachers from './pages/Teachers';
import News from './pages/News';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white font-['Noto_Sans_KR']">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/class" element={<Class />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
