export function filterFilmsByDirector(list, director) {
  if (!director) {
    return list;
  }
  return list.filter((item) => item.director === director);
}


export function getListOf(list, prop) {
  const result = [];
  list.forEach((item) => {
    if (!result.includes(item[prop])) {
      result.push(item[prop]);
    }
  });
  return result;
}

export function getFilmStats(list) {
  const stats = {
    acc_rating: list.reduce((acc, item) => acc + item.rating, 0),
    avg_rating: list.reduce((acc, item) => acc + item.rating, 0) / list.length,
    total: list.length,
    latest: list.reduce((acc, item) => {
      if (acc === null) {
        return item.release_date;
      }
      return acc > item.release_date ? acc : item.release_date;
    }, null),
  };
}
