import { useState } from "react";
import Swal from "sweetalert2";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = () => {
        setLoading(true);

        fetch(`http://localhost/ihahire/login.php?email=${email}&password=${password}`)

        .then(res => res.text())

        .then(data => {
            if(data == 1){
                window.location.replace('/home');
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: "Invalid Email or password!",
                 
                    
                  });
            }
        });

        setLoading(false);
    }


    return(
        <div>

            
              <div className="row">

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-5 shadow">
                        <div className="card-body">
                            <h3 className="text-center mt-4">Login</h3>
                            <input type="text" className="form-control mt-4 py-3 rounded-4 border-info" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="Password" className="form-control mt-3 py-3 rounded-4 border-info" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

                                

                            <botton className="btn btn-primary w-100 mt-4 mb-3  py-3 rounded-4" onClick={()=>handleSubmit()}>
                                {loading? (
                                    <div className="spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                  </div>
                                ):(<>LOGIN</>)}
                            </botton>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            

        </div>
    );
}
export default Login;