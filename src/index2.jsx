
import Ihahire from './components/header.jsx';
import Products from './components/products.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/modal.js';
import LatestProduct from './components/latest product.jsx';
import Featured from './components/featured.jsx';
import Footer from './components/footer.jsx';


function Indexx() {
  return (
    <div>
        <Ihahire/>

        <Products></Products>
        <LatestProduct></LatestProduct>
        <Featured></Featured>
        <Footer></Footer>
    </div>

);
}

export default Indexx;
