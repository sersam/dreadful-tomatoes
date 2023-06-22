import styles from './Home.module.css';
import movies from '../../assets/icon/clapperboard.svg';
import series from '../../assets/icon/tv.svg';
import moviesPoster from '../../assets/images/movies.jpeg';
import seriesPoster from '../../assets/images/GOT.jpeg';

import { HomeCard } from '../HomeCard';
import { useContext } from 'react';
import { ShowContext } from '../../App';
import { ShowTypes } from '../../constants';

export function Home() {
  const showContext = useContext(ShowContext);
  return (
    <div className={styles.home}>
      <HomeCard
        imageUrl={moviesPoster}
        footerText='Movies'
        footerImage={movies}
        onClick={() => showContext?.setShowType(ShowTypes.MOVIES)}
      />
      <HomeCard
        imageUrl={seriesPoster}
        footerText='Series'
        footerImage={series}
        onClick={() => showContext?.setShowType(ShowTypes.SERIES)}
      />
    </div>
  );
}
