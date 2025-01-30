import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route , Routes  } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

// component
import Navbar from './components/Navbar';
import List from './pages/List';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ViewOrder from './pages/ViewOrder';

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
                    <Route path="/book/list" element={<List />} />
                    <Route path="/book/view/:bookId" element={<Detail />} />
                    <Route path="/book/order" element={<ViewOrder />} />
                </Routes>
            </div>
            
        </>
    )
}

export default App
