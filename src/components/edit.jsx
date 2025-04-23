


import { data, Link, useParams } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

function Edit(){

    const [product, setProduct] = useState('');

    const [prod_name, setProd_Name] = useState('');
    const [category, setCategory] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);

    const {id} = useParams();

    const [data, setData] = useState([]);

    function getProd(){
        fetch('http://localhost/ihahire/myproducts.php?id='+id)
        .then((res) => res.text()) 
        .then(data => {
            setProduct((JSON.parse(data)))
        })
    }
    
    function getCategories(){
        fetch('http://localhost/ihahire/categories.php')
        .then((res) => res.text()) 
        .then(data => {
            setCategories((JSON.parse(data)))
        })
    }
    
    useEffect(
        ()=>{
            getCategories();
            getProd();
            const userId = JSON.parse(localStorage.getItem('user'));
            setOwner(userId.id);
        }, []
    )

    function sendData(){
        fetch(`http://localhost:3000/product?data=`+JSON.stringify(data))
        .then(()=>{
        // window.location.href="/product";
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
  
        const name = e.target.name;
        const value = e.target.value;

        setData((v)=>({...v, [name]: value}));

        alert(value)
       
        sendData();
        
    }
    

  

    return(
    <div>    

         
            <div className="d-flex">
                
                <Sidebar/>

                
                <div className="content w-100">
                  
                    <Navbar/>

               
                    <div className="container mt-5">
                        <div>
                            <h3>Edit
                                 </h3>
                            
                        </div>
                      
                      <div className="mt-5 row">
                            <div className="col-2"></div>
                            <div className="col-6">

                                <div className="card">
                                    <div className="card-header">
                                        <h6 className="card-title">Fill all info</h6>
                                    </div>

                                    <div className="card-body"  >
                                        <form onSubmit={handleSubmit}>

                                            <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Product Name' onChange={(e)=>setProd_Name(e.target.value) } value={product.prod_name}/>
                                            
                                            <select className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='category' onChange={(e)=>setCategory(e.target.value) } value={product.category}>
                                                <option value="" selected disabled>--Choose--</option>
                                                
                                                {
                                                    categories.map((data, i)=>(
                                                        <option value={data.id} key={i}>{data.name}</option>
                                                    ))
                                                }
                                            </select>
                                            
                                            <input type="number" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Price'  onChange={(e)=>setPrice(e.target.value) }  value={product.price}/>
                                            <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='description' onChange={(e)=>setDescription(e.target.value) }  value={product.description}/>
                                            
                                            <input type='submit' className="btn btn-info mt-5" onClick={()=>sendData()} value="SEND" />
                                        </form>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-3"></div>
                      </div>
                       
                        

                    
                        
                    </div>
                </div>
            </div>

            <Footer/>
        </div>   
);
}

export default Edit;