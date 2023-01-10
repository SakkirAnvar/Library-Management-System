import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/adminlogin.css'
import { Link } from "react-router-dom";


const AdminLogin = ()=>{
let [email,setEmail]= useState("")
let eml =((e)=>setEmail(e.target.value))
let [password,setPassword] = useState("")
let pswd = ((e)=>setPassword(e.target.value))
let navigate = useNavigate()

    let login = (e) => {
        e.preventDefault();
        let data = {email,password}
        console.log(data);
        if(email == "admin@gmail.com" && password == "0000"){
            navigate('/admin/')
        }else{
            alert("invalid credentials")
        }
    }
    return (
        <div className="adminlogin">
            <img width="400px" src="images/adminimg.webp" alt="" />
            <div className="adminCard">               
                <h1>Login as Admin</h1>
                <div className="adminform_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" value={email} required onChange={eml} placeholder="Email Address" />
                        </div>
                        <div className="password">
                            <input type="password" value={password} required onChange={pswd} placeholder=" Enter password" />
                        </div>
                        <button id="btn"><Link>LOGIN</Link></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;