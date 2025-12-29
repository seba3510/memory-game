import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

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

  return (
    <>
      <p>Hello, World!</p>
    </>
  );
} // App()

export { App };
