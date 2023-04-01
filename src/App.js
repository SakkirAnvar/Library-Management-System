import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/landingpage';
import AdminLogin from './Components/adminlogin';
import UserLogin from './Components/userlogin';
import AdminHome from './Components/adminhome';
import UserPortal from './Components/userportal';
import PageNotFound from './Components/error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/admin-login' element={<AdminLogin/>}/>
              <Route path='/user-login' element={<UserLogin/>}/>
              <Route path='/admin/*' element={<AdminHome/>}/>
              <Route path='/user/*' element={<UserPortal/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
