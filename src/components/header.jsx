import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Ihahire (){
    return(
        <div className="bg-light border-bottom navbar">
            <div className="container-fluid">
                <a className="h3 navbar-brand">
                    <img src={logo} width={150}/>
                </a>

                <div className="nav">
                    <li className="nav-item">
                        <a className="nav-link">CART</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">CART</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">CART</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">CART</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login | Register</Link>
                    </li>
                </div>
                
            </div>
        </div>

    );
}

export default Ihahire;