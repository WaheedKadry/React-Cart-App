
import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../RTK/slices/Cart-slice";



export default function Cart() {
  let dispatch = useDispatch()
    let cart = useSelector((state) => state.carts);
// console.log(cart);
let totalPrice = cart.reduce((acc, product)=>{
acc += product.price * product.quantity
return acc
}, 0)
    return (
        <Container className="py-5">
        <h1 className="py-5">Welcome To Cart</h1>
        <Button variant="primary" className="mb-3" onClick={() => dispatch(clear(cart))}>Clear</Button>
        <h5>Total Price: {totalPrice.toFixed(2)}$</h5>
        <Table striped bordered hover >
        <thead>
          <tr>
            <th># Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {cart.map((prod) => (
             <tr key={Math.random()}>
            <td>= {prod.id} =</td>
            <td>{prod.title}</td>
            <td><Image src={prod.image} alt={prod.title} style={{width:'100px', height:'100px'}}/></td>
            <td>{prod.price}</td>
            <td>{prod.quantity}</td>
            
            <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(prod))}>Delete</Button></td>
          </tr>
        ))}
         
        
        </tbody>
      </Table>
        </Container>
    )
}