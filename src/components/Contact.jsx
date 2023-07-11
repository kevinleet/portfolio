import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import headshot from "../assets/headshot_zoom.png";

const Contact = () => {
  return (
    <Container className="mt-4">
      <Container
        id="contact"
        className="w-full mx-auto text-center"
        style={{ maxWidth: "48rem" }}
      >
        <Card
          id="contact-card"
          className="w-full m-3 p-3 bg-secondary text-light rounded"
        >
          <Row className="pt-0">
            <Col xs={12} sm={5} className="mt-auto mb-auto">
              <Card.Img
                className="rounded-circle border border-light bg-light border-2 w-full"
                src={headshot}
              />
            </Col>
            <Col xs={12} sm={7} className="mt-auto mb-auto">
              <Card.Body className="fs-5">
                <Card.Text className="lead display-6">Contact Me</Card.Text>
                <Card.Text>
                  <strong>Phone:</strong> 617-257-3595
                </Card.Text>
                <Card.Text>
                  <strong>Email:</strong> kevinli617@gmail.com
                </Card.Text>
                <Card.Text>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/kevinli617/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light"
                  >
                    linkedin.com/kevinli617
                  </a>
                </Card.Text>
                <Card.Text>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/kevinleet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light"
                  >
                    github.com/kevinleet
                  </a>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row className="mt-5 mb-3">
            <h5 className="fs-4">
              Feel free to reach out to me via phone, email, or LinkedIn!
            </h5>
          </Row>
        </Card>
      </Container>
    </Container>
  );
};

export default Contact;
