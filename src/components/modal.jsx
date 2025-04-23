
function Modal({ onClose, prod}){
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Add to cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
        
                <div className="modal-body">
                    <p>image</p>
                    <p>category:</p>
                    <p>quantity:</p>
                    <p>price: {prod.price} rwf</p>  
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={ onClose }>close</button>
                    <button type="button" className="btn btn-primary">BUY HERE</button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;



