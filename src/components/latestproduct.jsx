import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
function LatestProduct(){

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState([]);



    
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


        
                const cart=(prod)=>{
        
                    Swal.fire({
                        title: "<h3>ADD TO CART</h3>",
                        
                        html: `
                            <div class='row' text-start>
                                <div class='col-md-4 border-right'>
                                    <img class='img-thumbnail' src='/images/${prod.image}'>
                                </div>
                                <div class='col-md-8 text-start'>
        
                                    <h5 class='mb-4'>${prod.prod_name}</h5>
                                    <div>Unit price: ${prod.price} rwf</div>
                                    <div class='mt-4'><i>Category:</i> ${prod.category} rwf</div>
                                    <div>${prod.description} rwf</div>
         
                                
                                    <div class='mt-4'> Order quantity: 
                                        <button class='btn btn-sm btn-danger' onClick='{() => setdata (data - 1)}> - </button>
                                        <button class='btn btn-sm btn-light'>${quantity}</button> 
                                        <button class='btn btn-sm btn-success' onClick={() => setdata (data + 1)}> + </button><br/>
                                        
                                        Total Price: ${prod.price * quantity } rwf
                                        
                                    </div>
        
        
        
                                </div>
                            </div>
                          
                          
                        `,
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: true,
                        confirmButtonText: `ADD`,
                        
                        cancelButtonText: `
                          <i class="fa fa-thumbs-down"></i> Close
                        `,
                        cancelButtonAriaLabel: "Close"
                      });
                }
                

            
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

                            <button className='btn btn-primary mt-5' onClick={()=>cart(cat)}><i> <b> Add to cart </b> </i></button>
                        </div>
            </div>
            ))}
            </div>
    
        </div>
        

    </div>
    </div>)
}


export default LatestProduct;
