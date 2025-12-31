import styles from "../styles/modules/Card.module.css";

function Card({ character, handleClick }) {
	//======================================================================

	return (
		<>
			<div className={styles.imageContainer}>
				<img
					src={character.imageUrl}
					alt={character.name}
					onClick={handleClick}
					className={styles.image}
				/>
			</div>

			<div className={styles.container}>
				<p>{character.name}</p>
			</div>
		</>
	);
} // Card()

export { Card };
