import { Container } from "react-bootstrap";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <Container className="w-100 mt-4">
      <Container className="" style={{ zIndex: -1 }}>
        <img src={bg} className="w-75 opacity-50 position-absolute"></img>
      </Container>
      <Container
        className="w-full d-flex flex-column align-items-center justify-content-center mx-auto text-center position-relative text-white"
        style={{ height: "625px" }}
      >
        <span className="lead pb-2" style={{ textShadow: "2px 2px gray" }}>
          <span className="display-1 fw-semibold mx-2">Kevin Li.</span>
          {"  "}
          <span className="display-5 mx-2"> software engineer.</span>
        </span>
        <span>
          <h3 className="lead display-6 fw-medium">
            Fueling Innovation <span className="display-6">and</span> Driving
            Excellence
            <br /> <span className="display-6">in</span> Today's Rapid Tech
            Landscape.
            <br />
          </h3>
        </span>
      </Container>
    </Container>
  );
};

export default Home;
