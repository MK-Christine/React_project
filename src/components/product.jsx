import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import NewProduct from './newProduct';

function Product(){

    const [product, setProduct] = useState([]);

    function getData(){
        fetch('http://localhost/ihahire/myproducts.php') 
        .then((res) => res.text()) 
        .then(Array => {
            setProduct((JSON.parse(Array)))
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
                            <Link className="nav-link" to="/product"> My products </Link>
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

               
                    <div className="container mt-5">
                        <div className="d-inline">
                            <h3 className="d-inline">MY PRODUCTS </h3>
                            <Link className="btn btn-primary float-end" to="/newproduct" >New</Link>
                        </div>
                      
                        <div className="mt-4 card card-body">

                            <table className="table table-condensed">
                                <tr>
                                    <th>ID</th>
                                    <th>PROD_NAME</th>
                                    <th>CATEGORY</th>
                                    <th>OWNER</th>
                                    <th>PRICE</th>
                                    <th>description</th>
                                    <th>ACTION</th>
                                </tr>
                                
                                {
                                    product.map((cat, index) => (
                                            <tr key={index}>
                                                <td>{cat.id}</td>
                                                <td>{cat.prod_name}</td>
                                                <td>{cat.category}</td>
                                                <td>{cat.owner}</td>
                                                <td>{cat.price}</td>
                                                <td>{cat.description}</td>
                                                <td>
                                                    <button className="btn btn-outline-success btn-sm me-1">EDIT</button> 
                                                    <button className="btn btn-outline-danger btn-sm">DELETE</button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                
                            </table>
                    
                        </div>
                        

                    
                        
                    </div>
                </div>
            </div>
        </div>   
);
}

export default Product;