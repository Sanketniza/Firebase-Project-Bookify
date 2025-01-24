import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button } from 'react-bootstrap';
import { Route , Routes  } from 'react-router-dom';

function App() {
  
  return (
        <>
            <h1>hell</h1>
            <Button variant="primary">Primary</Button>

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
            
        </>
    )
}

export default App
