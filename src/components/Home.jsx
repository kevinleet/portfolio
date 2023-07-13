import { Container } from "react-bootstrap";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";

const Home = () => {
  return (
    <Container className="w-100 mt-4 mb-2">
      <Container className="d-none d-md-block">
        <img src={bg2} className="w-100"></img>
      </Container>
      <Container className="d-block d-md-none">
        <img src={bg4} className="w-100"></img>
      </Container>
      {/* <Container
        className="w-full d-flex flex-column align-items-center justify-content-center mx-auto text-center position-relative text-white"
        style={{ height: "460px" }}
      >
        <span
          className="lead pb-4"
          style={{ textShadow: "1px 1px gray", letterSpacing: 4 }}
        >
          <span className="display-3 fw-semibold mx-2">Kevin Li.</span>
          {"  "}
          <br />
          <span className="fs-2 mx-2"> software engineer.</span>
        </span>
        <span style={{ letterSpacing: 3 }}>
          <h3 className="lead fs-2 fw-medium">
            Fueling Innovation{" "}
            <span className="lead fs-3">
              <br />
              and
            </span>{" "}
            Driving Excellence
            <br /> <span className=" lead fs-3">in</span> Today's Rapid <br />
            Tech Landscape.
            <br />
          </h3>
        </span>
      </Container> */}
    </Container>
  );
};

export default Home;
