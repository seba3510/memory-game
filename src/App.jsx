import { useEffect, useState } from "react";

import { Header } from "./components/Header";

import "./styles/style.css";

import { Card } from "./components/Card";

import { arrayToShuffled, arrayShuffle } from "array-shuffle";

function App() {
	const [characters, setCharacters] = useState([]);

	const [score, setScore] = useState({
		current: 0,
		best: 0,
	});

	//======================================================================

	async function fetchCharacters() {
		try {
			const url = "https://api.disneyapi.dev/character?pageSize=12";

			const response = await fetch(url);

			const data = await response.json();

			setCharacters(data.data);
		} catch (error) {
			console.error(error);
		} // catch
	} // fetchCharacters()

	//======================================================================

	useEffect(() => {
		fetchCharacters();
	}, [setCharacters]);

	//======================================================================

	function displayCharacters() {
		return characters.map((character) => {
			return (
				<div className="card" key={character._id}>
					<Card character={character} handleClick={handleCardClick} />
				</div>
			);
		});
	} // displayCharacters()

	//======================================================================

	function handleCardClick(event) {
		event.preventDefault();

		const shuffledCards = arrayToShuffled(characters);

		setCharacters(arrayShuffle(shuffledCards));
	} // handleCardClick()

	//======================================================================

	return (
		<>
			<Header score={score} />

			<main>{displayCharacters()}</main>
		</>
	);
} // App()

export { App };
