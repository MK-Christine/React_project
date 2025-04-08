 import { Link } from "react-router-dom";

function NotFound() {

    return(
        <div className="container mt-5">
            <div className="text-center mt-5">
                <h2 className="mt-5 text-secondary">404: Page Not Found</h2>
                <Link to="/"> Back to Home</Link>
            </div>
        </div>
    )
}

export default NotFound;