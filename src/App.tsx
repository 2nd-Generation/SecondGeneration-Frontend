import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './pages/Home';
import About from './pages/About';
import Class from './pages/Class';
import Teachers from './pages/Teachers';
import News from './pages/News';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Articles from './pages/admin/Articles';
import Instructors from './pages/admin/Instructors';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/*"
          element={
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
          }
        />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/articles"
          element={
            <PrivateRoute>
              <Articles />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/instructors"
          element={
            <PrivateRoute>
              <Instructors />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
