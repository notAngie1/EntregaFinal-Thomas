import Header from './components/Header'
// import Home from './Home';
// import Normativas from './Normativas';
// import Tienda from './Tienda';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css'

function App() {
 
  return (    
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/normativas" component={Normativas} /> */}
        {/* <Route path="/tienda" component={Tienda} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
