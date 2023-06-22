import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './Pagination.module.css';

export default function ScreenPagination({ totalPages, page, setPage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(event, page) => setPage(page)}
        color='secondary'
        renderItem={(item) => (
          <PaginationItem
            sx={{ color: 'white' }}
            slots={{ previous: ArrowBackIosIcon, next: ArrowForwardIosIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
