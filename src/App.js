
import './App.css';
import Ihahire from './components/header';
import Products from './components/products.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/js/dist/carousel.js';
import '../node_modules/bootstrap/js/dist/modal.js';

function App() {
  return (
    <div>
        <Ihahire/>

        <Products></Products>
    </div>

);
}

export default App;
