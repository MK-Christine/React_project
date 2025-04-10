import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';

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
                
                <Sidebar></Sidebar>

                
                <div className="content w-100">
                  
                    <Navbar/>

               
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

            <Footer/>
        </div>   
);
}

export default Categories;