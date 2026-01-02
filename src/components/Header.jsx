import styles from "../styles/modules/Header.module.css";

function Header({ score, streak }) {
	return (
		<header className={styles.header}>
			<div className={styles.info}>
				<h1>Disney Memory Game</h1>

				<p>
					Get points by clicking on image. Don't click on an image
					twice!
				</p>
			</div>

			<div className={styles.scores}>
				<p>Score: {score}</p>

				<p>Best Score: {streak}</p>
			</div>
		</header>
	);
} // Header()

export { Header };
