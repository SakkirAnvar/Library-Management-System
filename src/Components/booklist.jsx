import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import '../Styles/booklist.css'



const BookList = () => {
     let [books,setBooks] = useState([])
     useEffect(()=>{
        let fetchData =async ()=>{
           let response = await fetch('http://localhost:8000/books')
           let data = await response.json()
           setBooks(data)
        }
        fetchData()
     },[books])
     
     let location = useLocation()

     //delete a book from server
     let handleDelete =(id,title) =>{
        fetch(`http://localhost:8000/books/${id}`,{
          method:'DELETE'
        })
        alert(`${title}will be deleted permanently`)
     }
     let navigate = useNavigate()
     let read = (id)=>{
      if (location.pathname == '/admin/booklist') {
        navigate(`/admin/booklist/${id}`)
      } else {
        navigate(`/user/booklist/${id}`)
      }
     }
    
    return ( 
        <div className="booklist">
            <h1>Book List : {books.length}</h1>           
            <div className="book_section">
                { books.map(data => (
                    <div className="book_card">
                      <div className="book_img">
                        <img src={data.thumbnailUrl} />
                      </div>
                      <div className="book_details">              
                        <h4>Title :{data.title}</h4>
                        <h5>Authors : {data.authors}</h5>
                        <h5>Categories : {data.categories}</h5>
                        <h5>Page count : {data.pageCount}</h5>
                        <button onClick={ ()=> read(data.id)}>Read More</button>
                        { location.pathname == '/admin/booklist' && <button onClick={ () => handleDelete(data.id,data.title)}>Delete</button> }
                      </div>
                    
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BookList;