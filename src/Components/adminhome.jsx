import { Routes,Route } from "react-router-dom";
import AddBook from "./addbook";
import AddUser from "./adduser";
import AdminDashboard from "./admindashboard";
import AdminNavbar from "./adminnavbar";
import BookList from "./booklist";
import ReadBook from "./readbook";
import UserList from "./userlist";
import PageNotFound from "./error";


const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path="/booklist"element={<BookList/>}/>
                <Route path="/userlist" element={<UserList/>}/>
                <Route path="/booklist/:id" element={<ReadBook/>}/>
                <Route path="/adduser"element={<AddUser/>}/>
                <Route path="/addbook" element={<AddBook/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}

export default AdminHome;