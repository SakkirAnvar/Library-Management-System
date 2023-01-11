import { Link } from "react-router-dom";
import '../Styles/usernavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
            <h1>User Portal</h1> 
           <div className="list">
            <ul>
                <Link to="/user/"><li>Dashboard</li></Link>
                <Link to="/user/booklist"><li>Book List</li></Link>
                <Link to="/"><li>Logout</li></Link>
            </ul>
           </div>
        </div>
     );
}
 
export default UserNavbar;