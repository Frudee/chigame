export const getRandomObjects = (array: any[], x: number) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, x);
};
