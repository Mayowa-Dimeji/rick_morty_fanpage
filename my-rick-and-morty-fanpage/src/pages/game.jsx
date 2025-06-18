import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import "../css/game.css"; // Import your custom CSS for game styles

const GameUI = () => {
  const gridSize = 5;
  const level = 1;
  const progress = 60; // Example progress

  // Create 2D grid array
  const grid = Array.from({ length: gridSize }, (_, rowIndex) => (
    <Row key={rowIndex} className="">
      {Array.from({ length: gridSize }, (_, colIndex) => (
        <Col key={colIndex} xs="auto" className="grid-cell ">
          {/* You can add characters or images here */}
        </Col>
      ))}
    </Row>
  ));

  return (
    <Container className="d-flex">
      <h3 className="">Multiverse Mayhem</h3>
      <p className="">Level {level}</p>
      <ProgressBar
        now={progress}
        label={`${progress}%`}
        variant="success"
        className="w-75 mb-4"
        style={{ backgroundColor: "#343a40", color: "#fff" }}
        striped
        animated
      />

      <section className="grid-wrapper">{grid}</section>
    </Container>
  );
};

export default GameUI;
