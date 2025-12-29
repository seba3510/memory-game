import styles from "../styles/modules/Card.module.css";

function Card({ character }) {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={character.imageUrl} alt={character.name} />
      </div>

      <div className={styles.container}>
        <p>{character.name}</p>
      </div>
    </>
  );
} // Card()

export { Card };
