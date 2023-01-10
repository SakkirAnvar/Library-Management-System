import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let [books,setBooks] = useState([])
    let params = useParams()
     useEffect(()=>{
        let fetchData =async ()=>{
           let response = await fetch(`http://localhost:8000/books/${params.id}`)
           let data = await response.json()
           setBooks(data)
        }
        fetchData()
     },[])

  
    return ( 
        <div className="readbook">
            <div className="card">
               <h3>{books.title}</h3>
               <h5>Short Description</h5>
               <p>{books.shortDescription}</p>
               <h5>Long Description</h5>
               <p>{books.longDescription}</p>
               
            </div>
    
        </div>
     );
}
 
export default ReadBook;