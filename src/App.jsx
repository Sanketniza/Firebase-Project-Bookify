import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route , Routes  } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

// component
import Navbar from './components/Navbar';
import List from './pages/List';
import Home from './pages/Home';

function App() {
  
  return (
        <>
            <div>

                <Navbar />
    
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/bool/list" element={<List />} />
                </Routes>
            </div>
            
        </>
    )
}

export default App
