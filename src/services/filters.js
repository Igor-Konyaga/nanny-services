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

  const filterLessGreatThen = [...nanniesData].filter(nanny => {
    return filtrationCategory === 'Less than 10$'
      ? nanny.price_per_hour <= 10
      : nanny.price_per_hour >= 10;
  });

  const filterIsPopular = [...nanniesData].filter(nanny => {
    return filtrationCategory === 'Popular'
      ? nanny.rating > 4
      : nanny.rating <= 4;
  });

  if (filtrationCategory === 'A to Z' || filtrationCategory === 'Z to A') {
    return sortAB;
  }
  if (
    filtrationCategory === 'Less than 10$' ||
    filtrationCategory === 'Greater than 10$'
  ) {
    return filterLessGreatThen;
  }
  if (
    filtrationCategory === 'Popular' ||
    filtrationCategory === 'Not popular'
  ) {
    return filterIsPopular;
  }

  return nanniesData;
};
