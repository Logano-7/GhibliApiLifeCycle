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
  
  const acc_score = list.reduce((acc, item) => acc + parseInt(item.rt_score), 0);
  const avg_score = (acc_score / list.length);
  const total = list.length;
  const latest = Math.max(...list.map((item) => item.release_date));

  return {
    avg_score,
    acc_score,
    total,
    latest,
  };
}
