import styles from './HeaderShowSelector.module.css';
import classNames from 'classnames';

const handleClassNames = (selected: boolean): string => {
  return classNames(styles.showType, {
    [styles.showTypeSelected]: selected,
  });
};

export const HeaderShowSelector = ({ image, text, selected, onClick }) => {
  return (
    <div className={handleClassNames(selected)} onClick={onClick}>
      <img src={image} alt='Logo' />
      <p>{text}</p>
    </div>
  );
};
