import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addbook.css'
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle] = useState("")
    let [authors,setAuthors] = useState("")
    let [categories,setCategories] = useState("")
    let [pageCount,setPageCount] = useState("")
    let [shortDescription,setShortDescription] = useState("")
    let [longDescription,setLongDescription] = useState("")
    let [thumbnailUrl,setThumbnailUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let bookData ={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        fetch('http://localhost:8000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book has been added succesfully')
        navigate('/admin/booklist')
        
    }
    return ( 
        <div className="addbook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='Enter the title' />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder="Authors of the book"/>
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="Enter the categories"/>
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="number"required placeholder="Pagecount of the book"/>
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} required name="form-control" id="" cols="30" rows="10" placeholder="Short Description of the book"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} required name="form-control" id="" cols="30" rows="10" placeholder="Long description of the book"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} type="text" required placeholder="Thumbnail Url of the book"/>
                    </div>
                    <button>Add Book</button>
                </form>   
            </div>
        </div>
     );
}
 
export default AddBook;