import logo from '../../assets/logo/deadful cherry tomatoes.svg';
import movies from '../../assets/icon/clapperboard.svg';
import series from '../../assets/icon/tv.svg';
import styles from './Header.module.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { DatePicker } from '../DatePicker';
import { HeaderShowSelector } from '../HeaderShowSelector';
import { createContext, useContext, useState } from 'react';
import { ShowContext } from '../../App';
import { ShowTypes } from '../../constants';

export function Header() {
  const showContext = useContext(ShowContext);
  return (
    <header className={styles.header}>
      <div className={styles.logoHeader}>
        <img
          src={logo}
          className={styles.dreadfulLogo}
          alt='Logo'
          onClick={() => showContext?.setShowType(null)}
        />
        <div className={styles.headerRight}>
          <HeaderShowSelector
            image={movies}
            text={'Movies'}
            selected={showContext?.showType === ShowTypes.MOVIES}
            onClick={() => showContext?.setShowType(ShowTypes.MOVIES)}
          />
          <HeaderShowSelector
            image={series}
            text={'Series'}
            selected={showContext?.showType === ShowTypes.SERIES}
            onClick={() => showContext?.setShowType(ShowTypes.SERIES)}
          />
        </div>
      </div>
      {showContext?.showType != null && (
        <div className={styles.filterHeader}>
          <TextField
            id='input-with-icon-textfield'
            placeholder='Filter'
            className={styles.inputFilter}
            value={showContext.title}
            onChange={(event) => showContext?.setTitle(event.target.value)}
            variant='standard'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <DatePicker
            value={showContext?.releaseYear}
            onChange={showContext?.setReleaseYear}
          />
        </div>
      )}
    </header>
  );
}
