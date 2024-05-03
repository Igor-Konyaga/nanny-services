export const sortedData = (filtrationCategory, nanniesData) => {
  const sortAB = [...nanniesData].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return filtrationCategory === 'A to Z' ? 1 : -1;
    }
    if (nameA < nameB) {
      return filtrationCategory === 'A to Z' ? -1 : 1;
    }
    return 0;
  });

  if (filtrationCategory === 'A to Z' || filtrationCategory === 'Z to A') {
    return sortAB;
  }
};
