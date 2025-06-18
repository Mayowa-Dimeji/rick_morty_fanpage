import "./App.css";
import Intro from "./pages/intro";
import Play from "./pages/play";
import Game from "./pages/game";
import Container from "react-bootstrap/Container";
import "animate.css";

import CharacterCarousel from "./pages/characterCarousel";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Container className="lh-1" fluid>
      <Intro />

      <CharacterCarousel />
      <Play />
      <Game />
    </Container>
  );
}

export default App;
