
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Indexx from "./index2";
import Login from "./components/login";
import NotFound from "./components/notfound";
import '../node_modules/sweetalert2/dist/sweetalert2.css';
import '../node_modules/sweetalert2/dist/sweetalert2.all.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/modal.js';
import 'sweetalert2/dist/sweetalert2.js';
import Home from "./components/home.jsx";
import Categories from "./components/categories.jsx";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Indexx/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>

        <Route path='*' element={<NotFound/>}/>

        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;