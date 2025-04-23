import { data, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Footer from './footer';

function NewProduct(){

    const [product, setProduct] = useState('');

    const [prod_name, setProd_Name] = useState('');
    const [category, setCategory] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState('');

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
            const userId = JSON.parse(localStorage.getItem('user'));
            setOwner(userId.id);
        }, []
    )

    const sendData = async()=>{
        // const img = image.split(',')[1];
        // const encoded = encodeURIComponent(img);

        let data = new FormData();
        data.append("prodname", prod_name);
        data.append("categ", category)
        data.append("own", owner)
        data.append("prc", price)
        data.append("description", description)
        data.append("image", image)
        

       await fetch(`http://localhost/ihahire/newproduct.php`, {
            method: 'POST',
            body: data
        })
        .then(()=>{
            
        window.location.href="/product";
        })
    }

    const imageChange = (e) => {

        const file = e.target.files[0];
        
        setImage(file);   
    }
    

  

    return(
    <div>    

         
            <div className="d-flex">
                
                <Sidebar/>

                
                <div className="content w-100">
                  
                    <Navbar/>

               
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
                                        
                                        <select className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='category' onChange={(e)=>setCategory(e.target.value) }>
                                            <option value="" selected disabled>--Choose--</option>
                                            
                                            {
                                                categories.map((data, i)=>(
                                                    <option value={data.id} key={i}>{data.name}</option>
                                                ))
                                            }
                                        </select>
                                        
                                        <input type="number" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Price'  onChange={(e)=>setPrice(e.target.value) } />
                                        <input type="text" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='description' onChange={(e)=>setDescription(e.target.value) } />
                                        <input type="file" className="form-control mt-2 py-3 border-info rounded-4 ps-3" placeholder='Image' onChange={imageChange} />
                                        
                                        <button className="btn btn-info mt-5" onClick={()=>sendData()}>SEND</button>

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

export default NewProduct;