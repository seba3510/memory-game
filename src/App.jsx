import { useEffect, useState } from "react";

import { Header } from "./components/Header.jsx";

import { Card } from "./components/Card.jsx";

import { arrayToShuffled, arrayShuffle } from "array-shuffle";

import "./styles/style.css";

function App() {
	const [characters, setCharacters] = useState([]);

	const [score, setScore] = useState(0);

	const [streak, setStreak] = useState(0);

	const [card, setCard] = useState({});

	const [message, setMessage] = useState("");

	//======================================================================

	async function fetchCharacters() {
		try {
			const url = "https://api.disneyapi.dev/character?pageSize=12";

			const response = await fetch(url);

			const jsonResponse = await response.json();

			setCharacters(jsonResponse.data);
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
					<Card
						character={character}
						handleClick={(event) => {
							event.preventDefault();
							handleCardClick(character);
						}}
					/>
				</div>
			);
		});
	} // displayCharacters()

	//======================================================================

	function handleCardClick(object) {
		setMessage("");
		shuffleCards();

		const isFirstRound = Object.keys(card).length === 0;

		if (isFirstRound) {
			updateScore();
			updateCard(object);
			return;
		} // if

		const areCardsSame = card === object;

		if (areCardsSame) {
			setStreak(score);
			setScore(0);

			const error = "Game Over!";
			setMessage(error);
			return;
		} // if
		else {
			updateCard(object);
			updateScore();
		} // else
	} // handleCardClick()

	//======================================================================

	function updateCard(object) {
		setCard((prev) => {
			prev = object;
			return prev;
		});
	} // updateCard()

	//======================================================================

	function shuffleCards() {
		const shuffledCards = arrayToShuffled(characters);

		const shuffledCharacters = arrayShuffle(shuffledCards);

		setCharacters(shuffledCharacters);
	} // shuffleCards()

	//======================================================================

	function updateScore() {
		setScore((prev) => {
			return prev + 1;
		});
	} // updateScore()

	//======================================================================

	return (
		<>
			<Header score={score} streak={streak} />

			<main id="content">
				<div className="message">
					<p className="error">{message}</p>
				</div>
				<div className="cards">{displayCharacters()}</div>
			</main>
		</>
	);
} // App()

export { App };
