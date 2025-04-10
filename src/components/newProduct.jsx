import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';

function NewProduct(){

    const [product, setProduct] = useState('');
    const [prod_name, setProd_Name] = useState('');
    const [category, setCategory] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function sendData(){
       fetch(`http://localhost/ihahire/newproduct.php?prodname=${prod_name}&category=${category}&owner=${owner}&price=${price}&description=${description}
        `)
    }
    

  

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
                        <div>
                            <h3>New Product </h3>
                            
                        </div>
                      
                      <div className="mt-5 row">
                            <div className="col-2"></div>
                            <div className="col-6">

                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="card-title">Fill all info</h6>
                                    </div>

                                    <div className="card-body"  >

                                        <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Product Name' onChange={(e)=>setProd_Name(e.target.value) }/>
                                        <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='category' onChange={(e)=>setCategory(e.target.value) } />
                                        <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='owner' onChange={(e)=>setOwner(e.target.value) } />
                                        <input type="number" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Price'  onChange={(e)=>setPrice(e.target.value) } />
                                        <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='description' onChange={(e)=>setDescription(e.target.value) } />
                                        
                                        <button className="btn btn-info mt-5" onClick={()=>sendData()}>SEND</button>

                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-3"></div>
                      </div>
                       
                        

                    
                        
                    </div>
                </div>
            </div>
        </div>   
);
}

export default NewProduct;