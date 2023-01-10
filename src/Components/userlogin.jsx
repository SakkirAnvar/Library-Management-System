import { useNavigate } from "react-router-dom";
import '../Styles/userlogin.css'
import { Link } from "react-router-dom";
const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
       navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            <img width="400px" src="images/adminimg.webp" alt="" />
            <div className="userCard">
                <h1>Login as User</h1>
                <div className="userform_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required placeholder="Email Address" />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder=" Enter password" />
                        </div>
                        <button><Link>LOGIN</Link></button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default UserLogin;