import { useState,useEffect } from "react"
import '../Styles/userlist.css'
const UserList = () => {
    let [user,setUser] = useState([])
     useEffect(()=>{
        let fetchData =async ()=>{
           let response = await fetch('http://localhost:8000/users')
           let data = await response.json()
           setUser(data)
        }
        fetchData()
     },[])
     let handleDelete =(id,name) =>{
        setUser ( user.filter( x => x.id !=id))
        alert(`${name} has been deleted`)
     }
     
    return ( 
        <div className="userlist">
            <h1>User List :{user.length}</h1>
            { user.map(data =>(
            <div className="user_card">
            <h4>Name :{data.name}</h4>
            <h4>Age :{data.age}</h4>
            <h4>Email:{data.email}</h4>
            <h4>Phone Number :{data.phonenumber}</h4>
            <button onClick={ ()=> handleDelete(data.id,data.name)}>Delete</button>
            </div>
            ))}
        </div>
     );
}
 
export default UserList;