import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Inicio from './pages/Inicio';
import CrearPost from './pages/CrearPost';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth'; 
import { auth } from './firebase-config';
function App() {

  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname= ',login';
    })
  }

  return (
    <div className="App">
        <Router>
          <nav className='navbar navbar-expand-lg justify-content-center navbar-light bg-dark text-center py-4'>
            <Link to='/' className='nav-link text-white mx-2'>Inicio</Link>
            
            {!isAuth ? <Link to='/login' className='nav-link text-white mx-2'>Login</Link>:
            (
              <>
                <Link to='/crearpost' className='nav-link text-white mx-2'>Crear Post</Link>
                <button className='btn btn-primary' onClick={signUserOut}>Cerrar Sesion</button>
              </>
            )}
          </nav>


          <div className='container mt-5'>
            <Routes>
              <Route path='/' element={<Inicio isAuth={isAuth}/>}/>
              <Route path='/crearpost' element={<CrearPost isAuth={isAuth}/>}/>
              <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
