import {Card,Button,Form,Row,Col} from 'react-bootstrap';
import { CartContext} from '../cartContext';
import {useContext} from 'react'
const ProductCard = (props) => {
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(props.product.id);
  return (
    <Card>
        <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <div style={{padding:"10px",height:"300px",width:"100%"}}>
              <Card.Img variant="top" src={props.product.image} height="100%" width="100%"/>
            </div>
            <Card.Text>₹ {props.product.price}</Card.Text>
            {productQuantity > 0 ?
                <>
                    <Form as={Row}>
                      <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label> 
                      <Col sm="6">
                        <Button sm="6" className='mx-2' onClick={()=>cart.addOneToCart(props.product.id)}>+</Button>
                        <Button sm="6" className='mx-2' onClick={()=>cart.removeOneFromCart(props.product.id)}>-</Button>
                      </Col>
                    </Form>
                    <Button variant='danger' onClick={()=>cart.deleteFromCart(props.product.id)} className='my-2'>Remove Product From Cart</Button>
                </>
                :   <Button variant='primary' onClick={()=>cart.addOneToCart(props.product.id)}>Add To Cart</Button>
            }
        </Card.Body>
    </Card>
  )
}

export default ProductCard