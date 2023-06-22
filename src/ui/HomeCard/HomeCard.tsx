import styles from './HomeCard.module.css';

export const HomeCard = ({ imageUrl, footerText, footerImage, onClick }) => {
  return (
    <div
      className={styles.background}
      onClick={onClick}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.content}>
        <img src={footerImage} />
        <p className={styles.title}>{footerText}</p>
      </div>
    </div>
  );
};
