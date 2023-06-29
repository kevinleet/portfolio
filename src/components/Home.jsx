import { Container } from "react-bootstrap";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <Container className="">
      <Container
        id="about"
        className="mx-auto text-center my-5"
        style={{ minHeight: "500px" }}
      >
        <img src={bg} className="w-100" />
      </Container>
    </Container>
  );
};

export default Home;
