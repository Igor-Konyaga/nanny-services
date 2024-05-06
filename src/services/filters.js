export const filtrationData = (filtrationCategory, nanniesData) => {
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

  const filterLessGreatThen = [...nanniesData].filter(nanny => {
    return filtrationCategory === 'Less than 10$'
      ? nanny.price_per_hour <= 10
      : nanny.price_per_hour >= 10;
  });
  if (
    filtrationCategory === 'Less than 10$' ||
    filtrationCategory === 'Greater than 10$'
  ) {
    return filterLessGreatThen;
  }

  const filterIsPopular = [...nanniesData].filter(nanny => {
    const res =
      filtrationCategory === 'Popular' ? nanny.rating > 4 : nanny.rating <= 4;
    return res;
  });

  if (
    filtrationCategory === 'Popular' ||
    filtrationCategory === 'Not popular'
  ) {
    return filterIsPopular.sort((a, b) => b.rating - a.rating);
  }

  return nanniesData;
};
