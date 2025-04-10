import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Sidebar(){


    return(
       

         
        
                <div className="sidebar p-3">
                    <h3 className="text-center mb-4">
                    <img src={logo} width={150}/>
                    </h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active mt-5" to="/home">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product"> My products </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories"> Categories </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>

                
);
}

export default Sidebar;