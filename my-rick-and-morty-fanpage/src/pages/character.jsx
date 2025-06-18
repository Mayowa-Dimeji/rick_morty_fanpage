//  a character is a card of 10rem
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "animate.css";
import ".././css/character.css";
function Character({ name, image, status, species }) {
  return (
    // using section instead of card
    <Container
      className="character-card"
      fluid
      style={{ fontFamily: "Orbitron, sans-serif" }}
    >
      <Image src={image} alt={name} className="character-image" rounded fluid />
      <Container
        className="character-info"
        fluid
        style={{ alignItems: "flex-start" }}
      >
        <h3 className="character-name">{name}</h3>
        <p className="character-status">{status}</p>
        <p className="character-species">{species}</p>
      </Container>
    </Container>
  );
}

export default Character;
