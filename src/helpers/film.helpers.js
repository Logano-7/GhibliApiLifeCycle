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
