import { Container } from "react-bootstrap";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <Container className="">
      <Container id="about" className="mx-auto text-center m-3">
        <img src={bg} className="w-100" />
      </Container>
    </Container>
  );
};

export default Home;
