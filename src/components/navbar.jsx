import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';


function Navbar(){
    const [user, setUser] = useState('');

    const nav = useNavigate();

    useEffect(
        ()=>{
        
            const data = localStorage.getItem('user');

            setUser(JSON.parse(data));
        })

    return(

                    <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#">Buy online</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        
                            <div className="collapse navbar-collapse" id="navbarNav">
                            
                                <ul className="navbar-nav ms-auto me-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Home</Link>
                                    </li>
                                
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">
                                        
                                        </Link>
                                    </li>
                                    <div>
                                
                    </div>
                                </ul>
                                <span className="ms-auto"><i class="bi bi-person-circle"></i>  {user.firstname}  {user.lastname}</span>
                            </div>
                        </div>
                    </nav>

);
}

export default Navbar;