import { Container, Button, Card, Row } from "react-bootstrap";
import orangeboxalerts from "../assets/orangeboxalerts2.png";
import mbtatracker from "../assets/mbta_tracker.png";
import helloworld from "../assets/helloworld2.png";

const Projects = () => {
  return (
    <Container className="">
      <Container id="projects" className="mx-auto text-center my-4">
        <Row className="justify-content-center">
          <Card
            id="orangeboxalerts"
            style={{ width: "24rem" }}
            className="project-card m-3 p-2 bg-secondary text-light"
          >
            <Card.Img className="rounded" src={orangeboxalerts} />
            <Card.Body>
              <Card.Title>Orange Box Alerts</Card.Title>
              <Card.Text>
                Product restock notifier with automated web scraping and email
                notification capabilities.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "24rem" }}
            className="project-card m-3 p-2 bg-secondary text-light"
          >
            <Card.Img className="rounded my-1" src={mbtatracker} />
            <Card.Body>
              <Card.Title>MBTA Tracker</Card.Title>
              <Card.Text>
                Public transportation tracking application with real-time data
                and position plotting.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "24rem" }}
            className="project-card m-3 p-2 bg-secondary text-light"
          >
            <Card.Img
              className="rounded px-2 py-4 mt-2 mb-3 bg-dark"
              src={helloworld}
            />
            <Card.Body>
              <Card.Title>helloWorld.ai</Card.Title>
              <Card.Text>
                Mobile-responsive messaging platform with real time chatting and
                OpenAI integration.
              </Card.Text>
              <Button variant="primary">View Project</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
