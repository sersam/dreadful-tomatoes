import logo from '../../assets/logo/deadful cherry tomatoes.svg';
import appleStore from '../../assets/button/app store.svg';
import googlePlay from '../../assets/button/google play.svg';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} className={styles.logo} alt='Rviewer logo' />
      <div className={styles.downloadButtons}>
        <img src={appleStore} alt='App store logo' />
        <img src={googlePlay} alt='Google play logo' />
      </div>
      <p className={styles.copyright}>
        Copyright 2022 Dreadful Cherrys Tomatoes. All rights reserved.
      </p>
    </div>
  );
};
