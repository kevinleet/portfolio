import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/headshot_zoom.png";

const Contact = () => {
  return (
    <Container className="mt-4">
      <Container className="text-center mb-4">
        <h1 className="display-5">Contact Me</h1>
      </Container>

      <Container
        id="contact"
        className="w-full mx-auto text-center"
        style={{ maxWidth: "48rem" }}
      >
        <Card
          id="contact-card"
          className="w-full m-3 p-4 bg-secondary text-light rounded"
        >
          <Row>
            <Col xs={12} sm={4}>
              <Card.Img
                className="rounded-circle border border-light bg-light border-2 w-100"
                src={headshot}
              />
            </Col>
            <Col xs={12} sm={8}>
              <Card.Body className="fs-5">
                <Card.Text>
                  <p>
                    <strong>Cell:</strong> 617-257-3595
                  </p>
                  <p>
                    <strong>Email:</strong> kevinli617@gmail.com
                  </p>
                  <p>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/kevinli617/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                    >
                      linkedin.com/kevinli617
                    </a>
                  </p>
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/kevinleet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light"
                    >
                      github.com/kevinleet
                    </a>
                  </p>
                </Card.Text>
                <Card.Text>
                  Feel free to reach out to me via phone, email, or LinkedIn!
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
