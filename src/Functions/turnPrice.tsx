// 9자리수 === 억
// 5자리수 === 만

export const turnPrice = (price?: number) => {
  if (!price) return null;
  else if (price >= 1000000000000) {
    return `${(price / 1000000000000).toFixed(2)}조`;
  } else if (price >= 10000000) {
    return `${Math.floor(price / 100000000)}억`;
  } else if (price >= 10000) {
    return `${Math.floor(price / 10000)}만`;
  }
};
