import styles from './Card.module.css';

export const Card = ({ title, description, releaseYear, imageUrl }) => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.hoverModule}>
          <p className={styles.details}>{releaseYear}</p>
          <p className={styles.details}>{description}</p>
        </div>
      </div>
    </div>
  );
};
