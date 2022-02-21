import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import Reference from './components/Reference';
import Users from './components/Users'
import Footer from './Footer';
import Focus from './components/Focus';

function App() {
  return (
    <div className="container">      
      <Navbar />
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/focus" element={<Focus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
