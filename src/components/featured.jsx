
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';





function Featured(){


    const [product, setProduct] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);


    function getData(){
        fetch('http://localhost/ihahire/myproducts.php?section=featured') 
        .then((res) => res.text()) 
        .then(Array => {
            setProduct((JSON.parse(Array)))
        })
    }
    
    useEffect(
        ()=>{
            getData();
        }, []);

        const quant = (a) => {
            alert(a)
        }



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
                                <button class='btn btn-sm btn-danger'>-</button>
                                <button class='btn btn-sm btn-light'>${quantity}</button>
                                <button class='btn btn-sm btn-success'>+</button>

                                Total Price: ${prod.price } rwf
                                
                            </div>



                        </div>
                    </div>
                  
                  
                `,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `
                  <i class="fa fa-thumbs-up"></i> ADD
                `,
                confirmButtonAriaLabel: "Add",
                cancelButtonText: `
                  <i class="fa fa-thumbs-down"></i> Close
                `,
                cancelButtonAriaLabel: "Close"
              });
        }
        

    return(
        <div className="container mt-5 mb-5">
            <div>
                <h3>Featured</h3>
                <div className="d-flex">
                    <div className="row g-2">
                    {product.map((cat, i)=>(

                        <div className="col-2" key={i}>
                            <div className="card text-bg-light shadow">
                                <img src={"/images/"+cat.image} alt="" className="card-img-top" height={200} alt="image"/>
                                <div className="card-body" >
                                    <h4 className="text-center mb-3">{cat.prod_name}</h4>
                                    <i><b>Price: </b> {cat.price||0} rwf</i>
                                    <div className="mt-2">
                                        <button type="button" className="btn btn-primary" onClick={()=>{ setShow(true); cart(cat)}}>
                                            Add to cart
                                        </button>
                                    </div>

                                    {/* MODAL */}
                                    

                                    {/* END MODAL */}
                                </div>
                            </div>
                        </div>

                    ))}
                    </div>
                </div>
            </div>
            


    </div>);
}



export default Featured;