import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import orange_image1 from "../assets/orangeboxalerts/image1.png";
import orange_image2 from "../assets/orangeboxalerts/image2.png";
import orange_image3 from "../assets/orangeboxalerts/image3.png";
import orange_image4 from "../assets/orangeboxalerts/image4.png";
import orange_image5 from "../assets/orangeboxalerts/image5.png";
import mbta_image1 from "../assets/mbtatracker/image1.png";
import mbta_image2 from "../assets/mbtatracker/image2.png";
import mbta_image3 from "../assets/mbtatracker/image3.png";
import mbta_image4 from "../assets/mbtatracker/image4.png";
import helloworld_image1 from "../assets/helloworld/image1.png";
import helloworld_image2 from "../assets/helloworld/image2.png";
import helloworld_image3 from "../assets/helloworld/image3.png";
import helloworld_image4 from "../assets/helloworld/image4.png";
import myos1 from "../assets/myos/myos-1.png";
import myos2 from "../assets/myos/myos-2.png";
import myos3 from "../assets/myos/myos-3.png";
import myos4 from "../assets/myos/myos-4.png";

const Projects = () => {
  return (
    <Container className="">
      <Container id="orange-box-alerts" className="mx-auto my-2">
        <Container className="d-flex justify-content-start">
          <h1 className="mt-2 mb-2 display-5 fw-medium">Orange Box Alerts</h1>
        </Container>
        <Row className="mt-3 align-items-center mb-5">
          <Col md={6} xs={12} className="order-2 order-md-1">
            <Container>
              <p className="fs-6">
                <span className="lead">
                  Product restock notifier with automated web scraping and email
                  notification capabilities. Responsive front end with
                  mobile-first approach, built with React.js and Bootstrap.
                </span>
                <br />
              </p>
              <strong>Features: </strong>
              <ul>
                <li>
                  User authentication: Users can log in to the application using
                  their Google accounts via OAuth 2.0.
                </li>
                <li>
                  Subscription management: Users can subscribe to product
                  restock alerts, enabling them to receive notifications when
                  products become available.
                </li>
                <li>
                  Payment integration: Stripe integration allows users to
                  securely make payments for subscription plans.
                </li>
                <li>
                  Automated restock scanning: The application frequently scans
                  the Hermes web store for new product restocks, ensuring timely
                  notifications to subscribed users.
                </li>
                <li>
                  Responsive user interface: The application provides an
                  intuitive and user-friendly interface built with React and
                  Bootstrap, making it accessible across various devices.
                </li>
              </ul>
              <strong>Technologies Used: </strong>
              <ul>
                <li>
                  Front End: HTML, CSS, JavaScript, Vite, React.js, Bootstrap
                </li>
                <li>
                  Back End: Express, Mongoose, MongoDB Atlas, Nodemailer, Axios,
                  Zenrows
                </li>
              </ul>
              <Container className="d-flex justify-content-center align-items-center">
                <Button
                  href="https://orangeboxalerts.com/"
                  target="_blank"
                  variant="success"
                  className="px-4 mx-2"
                >
                  Live Site
                </Button>
                <Button
                  href="https://github.com/kevinleet/orange-box-alerts"
                  target="_blank"
                  variant="primary"
                  className="px-4 mx-2"
                >
                  GitHub
                </Button>
              </Container>
            </Container>
          </Col>
          <Col md={6} xs={12} className="order-1 order-md-2">
            <Container className="mb-2">
              <Carousel touch={true} interval={null} variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={orange_image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={orange_image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={orange_image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={orange_image4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={orange_image5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container id="mbta-tracker" className="mx-auto my-2">
        <Container className="d-flex justify-content-start justify-content-md-end">
          <h1 className="mt-2 mb-2 display-5 fw-medium">MBTA Tracker</h1>
        </Container>
        <Row className="mt-3 align-items-center mb-5">
          <Col md={6} xs={12} className="order-2">
            <Container>
              <p className="fs-6">
                <span className="lead">
                  Public transit tracking application with real-time data via
                  MBTA V3 API, displayed on an interactive map powered by
                  MapQuest.js.
                </span>
                <br />
              </p>
              <strong>Features: </strong>
              <ul>
                <li>
                  Map Integration: The application utilizes the MapQuest API to
                  display a map and plot the locations of trains and
                  user-submitted locations.
                </li>
                <li>
                  Train Filtering: The application provides buttons for
                  filtering trains based on their route color.
                </li>
                <li>
                  Stop Markers: The application places markers on the map to
                  indicate the locations of train stops.
                </li>
                <li>
                  Polyline Rendering: The application retrieves shape data from
                  the MBTA API and renders polylines on the map to represent
                  train routes.
                </li>
                <li>
                  User Input: Users can submit locations using the input bar.
                  The application uses the MapQuest API to extract the
                  coordinates of the submitted location and adds a marker to the
                  map.
                </li>
                <li>
                  Responsive Design: The application is designed to be
                  responsive and adapt to different screen sizes.
                </li>
              </ul>
              <strong>Technologies Used: </strong>
              <ul>
                <li>
                  HTML, CSS, JavaScript, jQuery, Axios, MBTA V3 API, MapQuest.js
                  SDK
                </li>
              </ul>
              <Container className="d-flex justify-content-center align-items-center">
                <Button
                  href="https://mbta-tracker-production.up.railway.app/"
                  target="_blank"
                  variant="success"
                  className="px-4 mx-2"
                >
                  Live Site
                </Button>
                <Button
                  href="https://github.com/kevinleet/mbta-tracker"
                  target="_blank"
                  variant="primary"
                  className="px-4 mx-2"
                >
                  GitHub
                </Button>
              </Container>
            </Container>
          </Col>
          <Col md={6} xs={12} className="order-1">
            <Container className="mb-2">
              <Carousel touch={true} interval={null} variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={mbta_image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={mbta_image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={mbta_image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={mbta_image4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container id="helloworld" className="mx-auto my-2">
        <Container className="d-flex justify-content-start">
          <h1 className="mt-2 mb-2 display-5 fw-medium">helloWorld.ai</h1>
        </Container>
        <Row className="align-items-center mb-5">
          <Col md={6} xs={12} className="order-2 order-md-1">
            <Container>
              <p className="fs-6">
                <span className="lead">
                  Mobile-responsive messaging platform with real time chatting
                  and OpenAI integration. Responsive front end with mobile-first
                  approach, built with React.js and Tailwind.
                </span>
                <br />
              </p>
              <strong>Features: </strong>
              <ul>
                <li>
                  Real-Time Chatting: Engage in seamless, real-time
                  conversations with other users through Socket.io's highly
                  responsive WebSocket communication, ensuring minimal latency.
                </li>

                <li>
                  AI-Powered Responses: Harnessing OpenAI's API, our application
                  delivers intelligent and precise responses, utilizing the
                  latest advancements in artificial intelligence.
                </li>
                <li>
                  Mobile-Responsive Interface: Thoughtfully designed with
                  Tailwind for devices of varying sizes for an intuitive and
                  distraction-free chatting experience.
                </li>
                <li>
                  Privacy and Security: Secures user data with bcrypt, hashing
                  all user passwords during signup to ensure utmost privacy and
                  protection.
                </li>
              </ul>
              <strong>Technologies Used: </strong>
              <ul>
                <li>
                  Front End: HTML, CSS, JavaScript, Vite, React.js, Tailwind,
                  Socket.IO, OpenAI, bcrypt.js
                </li>
                <li>Back End: Express, Mongoose, MongoDB Atlas, Axios</li>
              </ul>
              <Container className="d-flex justify-content-center align-items-center">
                <Button
                  href="https://helloworldfrontend-production.up.railway.app/"
                  target="_blank"
                  variant="success"
                  className="px-4 mx-2"
                >
                  Live Site
                </Button>
                <Button
                  href="https://github.com/kevinleet/helloWorld_frontend"
                  target="_blank"
                  variant="primary"
                  className="px-4 mx-2"
                >
                  GitHub
                </Button>
              </Container>
            </Container>
          </Col>
          <Col
            md={6}
            xs={12}
            className="order-1 order-md-2 d-flex justify-content-center align-items-center"
          >
            <Container className="mb-2 d-block d-lg-none">
              <Carousel touch={true} interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto w-75"
                    src={helloworld_image1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto w-75"
                    src={helloworld_image2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto w-75"
                    src={helloworld_image3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto w-75"
                    src={helloworld_image4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>

            <Container className="mb-2 d-none d-lg-block">
              <Carousel touch={true} interval={null}>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src={helloworld_image1}
                    alt="First slide"
                    style={{ maxHeight: "40em" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src={helloworld_image2}
                    alt="Second slide"
                    style={{ maxHeight: "40em" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src={helloworld_image3}
                    alt="Third slide"
                    style={{ maxHeight: "40em" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block mx-auto"
                    src={helloworld_image4}
                    alt="Fourth slide"
                    style={{ maxHeight: "40em" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container id="myos" className="mx-auto my-2">
        <Container className="d-flex justify-content-start justify-content-md-end">
          <h1 className="mt-2 mb-2 display-5 fw-medium">myOS</h1>
        </Container>
        <Row className="mt-3 align-items-center mb-5">
          <Col md={6} xs={12} className="order-2">
            <Container>
              <p className="fs-6">
                <span className="lead">
                  Interactive virtual desktop environment built with React and
                  PostgreSQL, reimagining the nostalgic Windows XP experience.
                </span>
                <br />
              </p>
              <strong>Features: </strong>
              <ul>
                <li>
                  Authentic Interface: Faithful replication of the familiar
                  Windows-XP desktop user interface, complete with interactive
                  desktop icons.
                </li>
                <li>
                  Program Launching: Each desktop icon corresponds to a specific
                  application, enabling users to launch various applications,
                  such as Calculator, Pokedex, Connect Four, AOL Instant
                  Messenger (powered by SmarterChild AI), Internet Explorer, and
                  Notepad.
                </li>
                <li>
                  AI-powered Chat: Chat with the legendary SmarterChild AI, now
                  powered by the OpenAI API, and enjoy interactive and
                  intelligent conversations reminiscent of the AOL Instant
                  Messenger days. Export your chat logs, access them anytime via
                  the Notepad application.
                </li>
                <li>
                  Personalization: Customize your virtual desktop background
                  with a selection of nostalgic Windows-XP inspired wallpapers
                  using the Settings section.
                </li>
              </ul>
              <strong>Technologies Used: </strong>
              <ul>
                <li>React, PostgreSQL, Bootstrap, OpenAI API, and more.</li>
              </ul>
              <Container className="d-flex justify-content-center align-items-center">
                <Button
                  href="https://myos.surge.sh/"
                  target="_blank"
                  variant="success"
                  className="px-4 mx-2"
                >
                  Live Demo
                </Button>
                <Button
                  href="https://github.com/kevinleet/myOS-client"
                  target="_blank"
                  variant="primary"
                  className="px-4 mx-2"
                >
                  GitHub
                </Button>
              </Container>
            </Container>
          </Col>
          <Col md={6} xs={12} className="order-1">
            <Container className="mb-2">
              <Carousel touch={true} interval={null} variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={myos1}
                    alt="myOS Screenshot 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={myos2}
                    alt="myOS Screenshot 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={myos3}
                    alt="myOS Screenshot 3"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={myos4}
                    alt="myOS Screenshot 4"
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Row>
      </Container>

      <hr />
    </Container>
  );
};

export default Projects;
