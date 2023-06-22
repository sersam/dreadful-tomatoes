import { useContext, useEffect, useState } from 'react';
import { Card } from '../Card';
import { ShowContext } from '../../App';
import styles from './ShowDetails.module.css';
import ScreenPagination from '../Pagination/Pagination';
import { fetchShows } from '../../application/api-dreadful-tomatoes';
import { filterShowsByReleaseYear, filterShowsByTitle } from './util';

interface DataType {
  entries: any[];
  total: number;
}

const LIMIT = 10;

export const ShowDetails = () => {
  const [data, setData] = useState<DataType>({ entries: [], total: 0 });
  const [filteredData, setFilteredData] = useState<DataType>({
    entries: [],
    total: 0,
  });
  const [page, setPage] = useState<number>(1);

  const showContext = useContext(ShowContext);

  useEffect(() => {
    const fetchData = async () => {
      const parsedData = await fetchShows();
      let filteredData = parsedData.entries.filter(
        (show) => show.programType.toUpperCase() === showContext?.showType
      );
      setData({ entries: filteredData, total: filteredData.length });
      setFilteredData({ entries: filteredData, total: filteredData.length });
    };
    fetchData();
    showContext?.setReleaseYear(null);
    showContext?.setTitle('');
  }, [showContext?.showType]);

  useEffect(() => {
    let filteredData = filterShowsByTitle(
      data,
      showContext?.title?.toLowerCase()
    );

    if (showContext?.releaseYear != null) {
      filteredData = filterShowsByReleaseYear(
        filteredData,
        showContext?.releaseYear?.year()
      );
    }

    setFilteredData({ entries: filteredData, total: filteredData.length });
  }, [showContext?.title, showContext?.releaseYear]);

  useEffect(() => {
    setPage(1);
  }, [filteredData]);

  return (
    <div className={styles.showDetails}>
      <div className={styles.showDetailsContent}>
        {filteredData.entries.slice((page - 1) * LIMIT, LIMIT * page).map(
          (
            {
              title,
              description,
              releaseYear,
              images: {
                posterArt: { url: imageUrl },
              },
            },
            index
          ) => (
            <Card
              key={`${title}-${index}`}
              title={title}
              description={description}
              releaseYear={releaseYear}
              imageUrl={imageUrl}
            />
          )
        )}
      </div>
      <ScreenPagination
        totalPages={Math.ceil(filteredData.entries.length / LIMIT)}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
