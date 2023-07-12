import { Container } from "react-bootstrap";
import bg from "../assets/bg.png";

const Home = () => {
  return (
    <Container className="mt-4">
      <Container id="home" className="w-full mx-auto text-center">
        <h1 className="lead display-1">Landing Page</h1>
      </Container>
    </Container>
  );
};

export default Home;
