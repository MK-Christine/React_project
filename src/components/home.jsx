import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from './footer';


function Home(){
    
    const [user, setUser] = useState('');

  

    useEffect(
        ()=>{
        
            const data = localStorage.getItem('user');

            setUser(JSON.parse(data));
        }, [])

  

    return(
    <div>    

         
            <div className="d-flex">
                <Sidebar/>

                
                <div className="content w-100">
                  
                    <Navbar prop={user}/>

               
                    <div className="container mt-4">
                        <h3>Welcome to Ihahire </h3>
                        

                   
                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card text-white bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title"> top Selling </h5>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card text-white bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title"> new Orders </h5>
                                    
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>

                    
                        
                    </div>
                </div>
            </div>
            <Footer/>

        </div>   
);
}

export default Home;