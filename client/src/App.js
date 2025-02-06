


import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'; // Corrected component name
import Home from './components/Home'; // Assuming you have a Home component
import Register from './components/Register';
import Createblog from './components/Createblog';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Createblog" element={<Createblog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;