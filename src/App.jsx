import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import "./styles/resets.css";

function App() {
  const [characters, setCharacters] = useState([]);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  //======================================================================

  async function fetchCharacters() {
    try {
      const url = "https://api.disneyapi.dev/character";

      const response = await fetch(url);

      const data = await response.json();

      setCharacters(data);

      console.log(data);
    } catch (error) {
      console.error(error);
    } // catch
  } // fetchCharacters()

  //======================================================================

  useEffect(() => {
    fetchCharacters();
  }, []);

  //======================================================================

  return (
    <>
      <Header score={score} bestScore={bestScore} />
    </>
  );
} // App()

export { App };
