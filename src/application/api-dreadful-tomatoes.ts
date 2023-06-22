const fetchShows = async () => {
  const data = await fetch(
    'https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json'
  );
  const parsedData = await data.json();

  return parsedData;
};

export { fetchShows };
