import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Shop from './components/Shop';
import NavBar from './components/NavBar';
import Producto from './components/Producto';
import Productos from './components/Productos';
import Error from './components/Error';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/rules" component={<Rules />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/producto/:id' element={<Producto />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
