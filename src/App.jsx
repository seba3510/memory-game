import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import "./styles/style.css";
import { Card } from "./components/Card";

function App() {
  const [characters, setCharacters] = useState([]);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  //======================================================================

  async function fetchCharacters() {
    try {
      const url = "https://api.disneyapi.dev/character?pageSize=12";

      const response = await fetch(url);

      const data = await response.json();

      setCharacters(data.data);

      console.log(data.data);
    } catch (error) {
      console.error(error);
    } // catch
  } // fetchCharacters()

  //======================================================================

  useEffect(() => {
    fetchCharacters();
  }, []);

  //======================================================================

  function displayCharacters() {
    return characters.map((character) => {
      return (
        <div className="card" key={character._id}>
          <Card character={character} />
        </div>
      );
    });
  } // displayCharacters()

  return (
    <>
      <Header score={score} bestScore={bestScore} />

      <main>{displayCharacters()}</main>
    </>
  );
} // App()

export { App };
