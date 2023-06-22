import { Header } from './ui/Header';
import { Home } from './ui/Home';
import { Footer } from './ui/Footer';
import styles from './App.module.css';
import { Dispatch, createContext, useState } from 'react';
import { ShowDetails } from './ui/ShowDetails';
import moment from 'moment';

interface ShowContextValue {
  showType: string | null;
  setShowType: Dispatch<React.SetStateAction<string | null>>;
  title: string | null;
  setTitle: Dispatch<React.SetStateAction<string | null>>;
  releaseYear: moment.Moment | null;
  setReleaseYear: Dispatch<React.SetStateAction<moment.Moment | null>>;
}

export const ShowContext = createContext<ShowContextValue | undefined>(
  undefined
);

function App() {
  const [showType, setShowType] = useState<string | null>(null);
  const [releaseYear, setReleaseYear] = useState<moment.Moment | null>(null);
  const [title, setTitle] = useState<string | null>('');

  return (
    <div className={styles.App}>
      <ShowContext.Provider
        value={{
          showType,
          setShowType,
          title,
          setTitle,
          releaseYear,
          setReleaseYear,
        }}
      >
        <Header />
        {showType == null ? <Home /> : <ShowDetails />}
        <Footer />
      </ShowContext.Provider>
    </div>
  );
}

export default App;
