export const getRandomObjects = (array: any[], x: number, exclude?: string) => {
  const filteredArray = exclude
    ? array.filter((obj) => obj["Russian"] !== exclude)
    : array;

  const shuffledArray = filteredArray.sort(() => Math.random() - 0.5);

  return shuffledArray.slice(0, x);
};

export const insertAtRandomPosition = (array: any[], item: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  array.splice(randomIndex, 0, item);
};
