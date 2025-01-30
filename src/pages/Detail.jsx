import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useFirebase } from "../context/Firebase";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


function Detail() {

    const firebase = useFirebase();
    
    const param = useParams(); // due to this i getting user id to find the detail about that user who has this id....
    // console.log(param);

    const [data , setData] = useState(null);
    const [qyt , setQyt] = useState(1);

    useEffect(() => {

        firebase.getBooksById(param.bookId).then((val) => setData(val));

    },[])

    if(data == null) {
        return <h1>Loading...</h1>
    }

    const placeOrder = async () => {
        
        const result  = await firebase.placeOrder(param.bookId , qyt);
        alert("Order Placed");
        
        setQyt(1);


        // console.log(result);
    }  


  return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">book detail</h1>
                <hr />
                <div className="container border-5 border-danger " >
                    <h3>Book Name : - {data.name}</h3>
                    <h3>ibm No : - {data.ibm}</h3>
                    <h3>Book Price : - {data.price}</h3>

                    {/* <h1>Book User Id : - {data.userId}</h1> */}
                    <h1>User Details</h1>
                    <h3>Book User Name : - {data.userName}</h3>
                    <h3>Book User Email : - {data.userEmail}</h3>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control 
                            onChange={(e) => setQyt(e.target.value)} 
                            value={qyt} 
                            type="number" 
                            
                        />
                    </Form.Group>

                    <Button variant="success" className="mt-3 w-50 "
                        onClick={placeOrder}
                    >
                        Buy Now
                    </Button>

                </div>

                <hr />

            </div>
        </>
    )
}

export default Detail;