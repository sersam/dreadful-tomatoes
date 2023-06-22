const filterShowsByTitle = (data, filterTitle) =>
  data.entries.filter((show: any) =>
    show.title.toLowerCase().includes(filterTitle)
  );

const filterShowsByReleaseYear = (data, filterReleaseYear) =>
  data.filter((show: any) => filterReleaseYear === show.releaseYear);

export { filterShowsByReleaseYear, filterShowsByTitle };
