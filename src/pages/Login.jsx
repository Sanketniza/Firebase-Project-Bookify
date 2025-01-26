import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {

    const firebase = useFirebase();
    // console.log(firebase)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(e) => {

        e.preventDefault();
        console.log("login user")
        const result =  await firebase.signupUserWithEmailAndPassword(email, password);
        // console.log(result);
        console.log("Successful");
    }

    // console.log(firebase)

    useEffect(() => {
        if(firebase.isLoggedIn){
              navigate("/");  
        }
    },[firebase,navigate])

  return (
        <>
            <div className="container m-1\5 ">
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                   </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                    </Form.Group>
                        
                    <button  type="submit" className="btn btn-primary">
                       Login
                    </button>

                </Form>

                <h4>or</h4>

                <button onClick={() => firebase.signWithGoogle()} className="btn btn-danger">
                    Login with Google
                </button>

            </div>
        
        </>
    )
}

export default Login