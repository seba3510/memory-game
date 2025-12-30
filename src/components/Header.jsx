import styles from "../styles/modules/Header.module.css";

function Header({ score }) {
	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<h1>Disney Memory Game</h1>

				<p>
					Get points by clicking on image; don't click on an image
					twice until the cards are shuffled!
				</p>
			</div>

			<div className={styles.scores}>
				<p>Score: {score.current}</p>

				<p>Best Score: {score.best}</p>
			</div>
		</header>
	);
} // Header()

export { Header };
