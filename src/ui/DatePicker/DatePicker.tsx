import styles from './DatePicker.module.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';

import { styled } from '@mui/material/styles';

const CustomDatePicker = styled(MuiDatePicker)(({ theme }) => ({
  margin: '1rem',
  '& .MuiInputBase-root': {
    height: '32px',
    backgroundColor: 'white',
  },
}));

export const DatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <CustomDatePicker
        views={['year']}
        className={styles.datePicker}
        value={value}
        onChange={(value) => onChange(value)}
      />
    </LocalizationProvider>
  );
};
