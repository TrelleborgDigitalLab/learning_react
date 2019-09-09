import React from "react";
import ReactDOM from "react-dom";
import meow from "./Mjau 3.jpg";
import logo from "./logo.png";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  Container,
  Card
} from "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Navbar bg="dark" variant="dark" className="">
        <Nav className="mr-auto">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Meow"}
          </Navbar.Brand>
        </Nav>
      </Navbar>
      <Container className="w-100">
        <Card className="mt-3 w-100 shadow-sm">
          <Card.Img variant="top" src={meow} />
          <Card.Body>
            <Card.Title>Meow</Card.Title>
            <Card.Text>Meow, meow.</Card.Text>
            <Button variant="primary" href="https://en.wikipedia.org/wiki/Cat">
              Meow more
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
