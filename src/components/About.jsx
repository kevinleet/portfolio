import { Container, Row, Col } from "react-bootstrap";
import past from "../assets/2004.png";
import present from "../assets/present.png";
import future from "../assets/future.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container className="">
      <Container id="about" className="mx-auto my-4">
        <Row className="mt-3 align-items-center mb-5">
          <Col md={6}>
            <h1 className="mb-4 display-5">Past</h1>
            <p className="fs-6">
              My passion for programming and web development was ignited at an
              early stage in my life. During middle school, I had the
              opportunity to attend a web development summer camp at the
              Massachusetts Institute of Technology. It was there that I
              immersed myself in learning HTML and CSS, utilizing Adobe
              Dreamweaver to craft captivating websites.
              <br />
              <br />
              As I progressed through my high school years, I transformed my
              passion into a custom website creation business. I sold my
              services to both individuals and organizations, offering a
              comprehensive package encompassing everything from website design
              and development to maintenance and web hosting. <br />
              <br />
              One particularly memorable experience during that time was when my
              11th-grade math teacher discovered my business and approached me
              for assistance. He wanted a website that he could upload and
              display classroom related content on. Leveraging my skills, I
              created a dynamic, multi-page website that served as an invaluable
              resource for him and his students, extending its impact even
              beyond my graduation.
              <br />
              <br />
              These formative experiences not only deepened my passion but also
              instilled in me a profound appreciation for problem-solving and
              the satisfaction of collaborating with people to understand their
              needs and provide effective solutions. As I pursued higher
              education and ventured into the professional world, my affinity
              for these aspects remained unwavering, propelling me to
              continuously seek opportunities to apply my skills and create
              meaningful contributions.
            </p>
          </Col>
          <Col md={6}>
            <img src={past} className="w-100 rounded" />
          </Col>
        </Row>
        <hr />
        <Row className="mt-5 mb-5">
          <Col md={6} className="order-md-2">
            <h1 className="mb-4 display-5">Present</h1>
            <p className="fs-6">
              In the present, I have built upon my passion for programming and
              web development, leveraging my diverse background and professional
              experiences. While excelling in both the automotive and real
              estate industries for several years, I discovered that my true
              passion lies in programming and software engineering. This
              realization has driven me to pursue a career in this dynamic and
              ever-evolving field.
              <br />
              <br />
              To further solidify my technical skills and expand my knowledge, I
              completed the intensive Software Engineering Immersive program at
              General Assembly. This comprehensive program encompassed 450+
              hours of immersive learning, equipping me with a deep
              understanding of product development fundamentals, MVC frameworks,
              data modeling, and collaboration strategies. Additionally, I
              obtained the Full-Stack Engineer Certification from Codecademy,
              augmenting my expertise in front-end and back-end technologies.
              <br />
              <br />
              With a combined background in the automotive and real estate
              industries, alongside my dedication to programming and software
              engineering, I bring a unique perspective and a diverse skill set
              to the table. My passion for problem-solving, creativity, and
              continuous learning drives me to create innovative solutions and
              make meaningful contributions in the fast-paced tech landscape.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img src={present} className="w-100 rounded" />
            <Container className="text-center text-white mt-1">
              <Link
                to="https://github.com/kevinleet"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                github.com/kevinleet
              </Link>
            </Container>
          </Col>
        </Row>
        <hr />
        <Row className="mt-5 align-items-center mb-5">
          <Col md={6}>
            <h1 className="mb-4 display-5">Future</h1>
            <p className="fs-6">
              Looking ahead, I am excited to continue my journey in programming
              and software engineering, with a focus on pursuing cutting-edge
              technologies and contributing to innovative projects. As the tech
              landscape evolves rapidly, I am committed to staying at the
              forefront of industry trends and expanding my expertise in
              emerging technologies. <br />
              <br />
              In the future, I envision myself working on ambitious projects
              that have a meaningful impact on people's lives. Whether it's
              developing innovative applications, creating user-friendly
              interfaces, or solving complex problems through elegant code, I am
              driven to make a positive difference through my work. <br />
              <br />
              As I embark on this exciting journey, I am eager to embrace new
              challenges, push my limits, and continue evolving as a skilled and
              passionate software engineer. The future holds endless
              possibilities, and I am enthusiastic about the opportunities that
              lie ahead in shaping the future of technology.
            </p>
          </Col>
          <Col md={6}>
            <img src={future} className="w-100 rounded" />
          </Col>
        </Row>
        <hr />
      </Container>
    </Container>
  );
};

export default About;
