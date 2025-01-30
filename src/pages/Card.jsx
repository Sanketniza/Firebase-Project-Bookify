import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import  { useNavigate } from 'react-router-dom'

const Cards = (props) => {

    const navigate = useNavigate();


  return (

         <CardGroup className="m-5 ">

             <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    This Books is Title {props.name} and price is {props.price}
                  </Card.Text>
                  <Button onClick={(e) => navigate(`/book/view/${props.id}`)} variant="primary">View</Button>
                </Card.Body>
             </Card>

        </CardGroup>
    
    )
}

export default Cards;  