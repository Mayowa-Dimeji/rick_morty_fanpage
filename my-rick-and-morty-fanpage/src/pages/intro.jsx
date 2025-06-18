import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import logo from "../assets/rmlogo.png";
import rmImg from "../assets/randm.png";
import "animate.css";

// intro to stack rick and morty logo and images
function Intro() {
  return (
    <Container className="justify-content-center" fluid>
      <Row>
        <Col xs={2} lg={4}>
          <Image
            src={logo}
            alt="Rick and Morty Logo"
            fluid
            className="logo animate__animated animate__backInDown"
          />
        </Col>
        <Col xs={2} lg={4}>
          <Image
            src={rmImg}
            alt="Rick Sanchez"
            fluid
            className="rm-img animate__animated animate__backInDown"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
