import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Character from "./character";
import { Button } from "react-bootstrap";
import "../App.css";
import "animate.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";
// import Stack from "react-bootstrap/Stack";
const ITEM_WIDTH = 500;

function CharacterCarousel() {
  const [characters, setCharacters] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef();

  //   FUNCTION TO HANDLE SCROLL
  const handlescroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
  };
  // Fetch characters
  useEffect(() => {
    const stored = localStorage.getItem("rickAndMortyCharacters");
    if (stored) {
      setCharacters(JSON.parse(stored));
    } else {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results);
          localStorage.setItem(
            "rickAndMortyCharacters",
            JSON.stringify(data.results)
          );
        });
    }
  }, []);

  // Chunk characters based on screen

  return (
    <Container className="my-container d-flex" fluid>
      <h2
        style={{ fontFamily: "Orbitron, sans-serif", fontWeight: "900" }}
        className="font-effect-3d"
      >
        Meet the Characters
      </h2>
      <Container
        ref={carouselRef}
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "100vw",
        }}
        fluid
      >
        <Container className="content-box d-flex" fluid>
          {characters.map((character) => (
            <Character
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
            />
          ))}
        </Container>
      </Container>
      <Container className="scroll-indicators" fluid>
        <Button
          className="text-center"
          variant="primary"
          onClick={() => handlescroll(-ITEM_WIDTH)}
        >
          &lt;
        </Button>
        <Button
          className="text-center"
          variant="primary"
          onClick={() => handlescroll(ITEM_WIDTH)}
        >
          &gt;
        </Button>
      </Container>
    </Container>
  );
}

// Utility function

export default CharacterCarousel;
