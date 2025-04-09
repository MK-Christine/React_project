import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';

function Categories(){

    const [categories, setCategories] = useState([]);

    function getData(){
        fetch('http://localhost/ihahire/categories.php')
        .then((res) => res.text()) 
        .then(data => {
            setCategories((JSON.parse(data)))
        })
    }
    
    useEffect(
        ()=>{
            getData();
        }, []
    )

  

    return(
    <div>    

         
            <div className="d-flex">
                <div className="sidebar p-3">
                    <h3 className="text-center mb-4">
                    <img src={logo} width={150}/>
                    </h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active mt-5" to="/home">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products"> My products </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories"> Categories </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="profile">Profiles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="logout">Logout</Link>
                        </li>
                    </ul>
                </div>

                
                <div className="content w-100">
                  
                    <nav className="navbar navbar-expand-lg navbar-light border-end">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#">Buy online</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        
                            <div className="collapse navbar-collapse" id="navbarNav">
                            
                                <ul className="navbar-nav ms-auto ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Home</Link>
                                    </li>
                                
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">Contact</Link>
                                    </li>
                                    <div>
                        <span className=" me-3">👤 user </span>
                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>

               
                    <div className="container mt-4">
                        <h1>Categories </h1>
                      
                        <table className="table">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>CREATED DATE</th>
                            </tr>
                            
                            {
                                categories.map((cat, index) => (
                                        <tr key={index}>
                                            <td>{cat.id}</td>
                                            <td>{cat.name}</td>
                                            <td>{cat.date}</td>
                                        </tr>
                                    ))
                                }
                            
                        </table>
                   
                        

                    
                        
                    </div>
                </div>
            </div>
        </div>   
);
}

export default Categories;