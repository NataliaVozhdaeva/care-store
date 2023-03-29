import { Route, Routes } from 'react-router-dom';
import { Catalog } from './components/catalog';
import { Good } from './components/good';
import { Cart } from './components/cart';
import { Navigation } from './components/navigation';
import { Header } from './components/header';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/good/:id' element={<Good />} />
      </Routes>
    </div>
  );
}

export default App;
