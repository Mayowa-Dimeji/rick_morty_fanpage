import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "animate.css";

function Play() {
  return (
    <Container className="justify-content-center" fluid>
      <Row>
        <Col xs={12} className="text-center">
          <h2 style={{ fontFamily: "Orbitron, sans-serif" }}>
            Welcome Multiverse Mayhem
          </h2>
          <p style={{ fontFamily: "Orbitron, sans-serif" }}>
            Join your favorite characters in a battle across the multiverse!
          </p>
          <Button
            className="text-center"
            variant="primary"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Play
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Play;
