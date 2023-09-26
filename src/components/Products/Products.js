import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPoducts } from "../../RTK/slices/productsSlice";
import { addToCart } from "../../RTK/slices/cartSlice";
const Products = () => {
  let dispatch = useDispatch();
  let { products } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPoducts());
  }, []);
  return (
    <Container className="py-5">
      <Row className="py-5 ">
        {products.map((e) => {
          return (
            <Col key={Math.random() * Math.random()}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "200px" }}
                  variant="top"
                  src={e.image}
                />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.description}</Card.Text>
                  <Card.Text>Price: {e.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(e))}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
