import { Link } from "react-router-dom";
import '../Styles/error.css'
const PageNotFound = () => {
    return ( 
        <div className="pagenotfound">
            <div className="pagecontent">
                <h1>Page Not Found</h1>
                <h3>Sorry,this page doesn't work !</h3>
                <button><Link to="/">Back To Home</Link></button>
            </div>
            <div className="404img">
                <img src="../images/404.png" alt="" />
            </div>
        </div>
     );
}
 
export default PageNotFound;