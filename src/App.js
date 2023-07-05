import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './Pages/Store'
import Success from './Pages/Success'
import Cancel from './Pages/Cancel';
import CartProvider from './cartContext'
function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store/>}></Route>
            <Route path='success' element={<Success/>}/>
            <Route path='cancel' element={<Cancel/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>  
  );
}

export default App;
