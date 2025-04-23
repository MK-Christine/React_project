import logo from '../images/logo.png';




function Products(){
   
        
    return(

        <div className='border-2 bg-light'>
            <div className="d-flex justify-content-center" id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/images/img250423100422.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/images/img250423100423.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/images/img250423100422.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="false"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        </div>
    
    );
}

export default Products;