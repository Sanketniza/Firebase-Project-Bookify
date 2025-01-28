import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

function List() {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [ibm, setIbm] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await firebase.handleCreateNewListing(name, ibm, price);

  };
  return (
        <>
          <div className="container m-1\5 ">

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Enter book name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter book name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>ibm no</Form.Label>
                <Form.Control
                  onChange={(e) => setIbm(e.target.value)}
                  value={ibm}
                  type="text"
                  placeholder="Enter book ibm"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="text"
                  placeholder="Enter book Price"
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Cover</Form.Label>
                <Form.Control
                  onChange={(e) => setCover(e.target.files[0])}
                  type="file"
                />
              </Form.Group> */}

              

              <button type="submit" className="btn btn-primary">
                create book 
              </button>
            </Form>
           
          </div>
          
        </>
    );
}

export default List;
