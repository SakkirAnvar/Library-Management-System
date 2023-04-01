import '../Styles/admindashboard.css'
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    return (
        <div className="admindashboard">
            <div className="content">
                <h1>Signature Series: In the News with Fareed Zakaria</h1>
                <h5>By Erika Berlin on January 11, 2023</h5>
                <p>Greenwich Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…</p>
                <Link>Take a look</Link>
            </div>
            <div className='blog'>
                <div className="content2">
                <h1>At the Library this January …</h1>
                <h5>By Erika Berlin on December 29, 2022</h5>
                <p>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                <Link>Take a look</Link>
                </div>
            </div>
            <div className='blog3'>
                <div className="content3">
                <h1>Friends Friday Films Announces Its Winter Screenings</h1>
                <h5>By Erika Berlin on December 28, 2022</h5>
                <p>Greenwich Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…</p>
                <Link>Take a look</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;