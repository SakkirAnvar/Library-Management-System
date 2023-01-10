import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phonenumber,setPhonenumber] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let userData ={name,age,email,phonenumber}
        fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user has been added succesfully')
        navigate('/admin/userlist')

    }
    return ( 
        <div className="adduser">
            <h1>Add a user</h1>
            <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    <input type="name" required value={name} onChange={ (e)=> setName(e.target.value)} placeholder="Enter Name"/>
                </div>
                <div className="age">
                    <input type="number" min="1" required value={age} onChange={ (e)=> setAge(e.target.value)} placeholder="Enter your age"/>
                </div>
                <div className="email">
                    <input type="email" required value={email} onChange={ (e)=> setEmail(e.target.value)} placeholder="Enter Email" />
                </div>
                <div className="number">
                    <input type="tel" minLength="10" maxLength="10" required value={phonenumber} onChange={ (e)=> setPhonenumber(e.target.value)} placeholder="Enter Phone Number"/>
                </div>
                <button>Add User</button>
            </form>
            </div>
        </div>
     );
}
 
export default AddUser;