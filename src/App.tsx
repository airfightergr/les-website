import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'; 
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Support from './pages/Support/Support';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

function App() {

    return (
    <div className="container">
      <div className="back">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <NavBar className="navBar" />


    </div>
  );
}

export default App;
