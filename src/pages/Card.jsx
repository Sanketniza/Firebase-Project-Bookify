import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

const Cards = (props) => {

  return (

         <CardGroup className="m-5 ">

             <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    This Books is Title {props.name} and price is {props.price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
             </Card>

        </CardGroup>
    
    )
}

export default Cards