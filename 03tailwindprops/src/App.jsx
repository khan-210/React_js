import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <Card title="Card 1" imgSrc="" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
      <Card title="Card 5" />
      <Card title="Card 6" />
    </>
  );
}

export default App;
