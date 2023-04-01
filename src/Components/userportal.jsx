import { Routes,Route } from "react-router-dom";
import BookList from "./booklist";
import ReadBook from "./readbook";
import UserDashboard from "./userdashboard";
import UserNavbar from "./usernavbar";
import PageNotFound from "./error";
const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/booklist" element={<BookList/>}/>
                <Route path="/booklist/:id" element={<ReadBook/>}/>
                <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;