import './App.css';
import Product from './components/Product/Product';
import Shop from './components/Shop/Shop';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div>
      <Carousel />
      <Shop></Shop>
      <Product></Product>
    </div>
  );
}

export default App;
