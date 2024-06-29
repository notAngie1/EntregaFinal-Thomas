import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import Productos from './components/Productos';
import Error from './components/Error';
import Rules from './components/Rules';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import Cart from './components/Cart';
import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/*' element={<Error />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/shop" element={<Shop />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/producto/:id' element={<Producto />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
