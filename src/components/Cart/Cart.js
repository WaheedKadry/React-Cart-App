import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { clearCart, deleteFromCart } from "../../RTK/slices/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  let cartState = useSelector((state) => state.cart);
  console.log(cartState);
  let priceTotal = cartState.reduce((acc, crr) => {
    acc += crr.price * crr.quantity;
    return +acc.toFixed(2);
  }, 0);
  console.log(priceTotal);
  return (
    <Container>
      <h1 className="py-5 ">Welcome To Cart</h1>

      <Button variant="primary" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <h3 className="text-center my-3">Total Price: {priceTotal}</h3>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartState.map((e) => {
            //  before return function calc price also
            // totalPrice += +e.price
            return (
              <tr key={Math.random()}>
                <td className="text-center">{e.id}</td>
                <td>{e.title}</td>
                <td>
                  <Image
                    src={e.image}
                    alt={e.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td className="text-center">{e.price}</td>

                <td className="text-center">{e.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteFromCart(e))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/*<h3 className='text-center'>Total Price: {totalPrice}</h3>*/}
    </Container>
  );
};

export default Cart;
