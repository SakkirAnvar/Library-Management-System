import '../Styles/adminnavbar.css'
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
           <h1>Admin Portal</h1> 
           <div className="list">
            <ul>
                <Link to='/admin/'>Dashboard<li></li></Link>
                <Link to='/admin/addbook'><li>Add Book</li></Link>
                <Link to='/admin/adduser'><li>Add User</li></Link>
                <Link to='/admin/booklist'><li>Book List</li></Link>
                <Link to='/admin/userlist'><li>User List</li></Link>
                <Link to='/'><li>Logout</li></Link>
            </ul>
           </div>
        </div>
     );
}
 
export default AdminNavbar;