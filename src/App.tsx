import { Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/catalog';
import { GoodCart } from './pages/goodCart';
import { Cart } from './components/cart';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (
    <>
      <header>
        <Navigation />
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/good/:id' element={<GoodCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
