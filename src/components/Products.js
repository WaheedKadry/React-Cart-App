import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../RTK/slices/products-slice";
import { addToCart } from "../RTK/slices/Cart-slice";

export default function Products() {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  let state = useSelector((state) => state);
  // console.log(products);
  // console.log(state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // let handle = (prod) => {
  //   console.log(prod);
  //   dispatch(addToCart(prod));
  // };
  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((prod) => (
          <Col key={prod.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                style={{ height: "300px" }}
                variant="top"
                src={prod.image}
              />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>{prod.description}</Card.Text>
                <Card.Text>{prod.price}$</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(prod))}>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
/*

 <Container>
      <Row>
        {products.map((prod) => {
          <Col key={prod.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={prod.image} />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>{prod.description}</Card.Text>
                <Card.Text>{prod.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        })}
      </Row>
    </Container>
    ///////==========================
        <Container>
      <Row>
        {products.map((prod) => (
          <div key={prod.id}>
            <h1>{prod.title}</h1>
          </div>
        ))}
      </Row>
    </Container>
*/
