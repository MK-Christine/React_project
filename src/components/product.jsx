import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import NewProduct from './newProduct';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';

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
                <Sidebar/>

                
                <div className="content w-100">
                  
                    <Navbar/>

               
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
            <Footer/>
        </div>   
);
}

export default Product;