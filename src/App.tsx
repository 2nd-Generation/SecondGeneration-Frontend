import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Class from './pages/Class';
import Teachers from './pages/Teachers';
import News from './pages/News';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-custom-bg text-white">
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
