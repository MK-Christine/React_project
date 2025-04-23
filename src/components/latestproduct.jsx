import { useState, useEffect } from 'react';

function LatestProduct(){

    const [product, setProduct] = useState([]);
    
    function getData(){
        fetch('http://localhost/ihahire/latestproducts.php') 
        .then((res) => res.text()) 
        .then(Array => {
            setProduct((JSON.parse(Array)))
        })
    }
         useEffect(
                ()=>{
                    getData();
                }, []);

    return(<div>
        <div className="container mt-5">
            <h3>Latest Products</h3>
            <div className="d-flex">
            <div className="row g-2">
            {product.map((cat, a)=>(
                
                <div className="col-2" key={a}>
                
                
                <div className="card" >
                <img src={"/images/"+cat.image} alt="" className="card-img-top" height={200} alt="image"/>
                        <div className="card-body">
                            <h4 className="text-center mb-3">{cat.prod_name}</h4>
                            <i><b>Price: </b> {cat.price||0} rwf</i>
                            </div>
                        </div>
            </div>
            
            ))}
            </div>
    
        </div>
        

    </div>
    </div>);
}


export default LatestProduct;
