import { Link } from "react-router-dom";
import '../Styles/landingpage.css'

const  LandingPage = ()=>{
    return(
        <div className="landingpage">
            <div className="main">
                <h1>Library Management System</h1>
                <div className="selection">
                <div className="admin">
                    <img width="100px" src="images/adminlogin.png" />
                    <button><Link to='/admin-login'>Admin login</Link></button>
                </div>
                <div className="user">
                    <img width="100px" src="images/userlogin.png" />
                    <button><Link to='/user-login'>User login</Link></button>
                </div>
              </div>
            </div>
        </div>
    )
}
export default LandingPage;