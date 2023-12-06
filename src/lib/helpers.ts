export const getArrayObjects = (
  array: any[],
  part: string | number = "random",
  exclude?: string,
  chunkSize = 10
) => {
  if (part === "random") {
    const filteredArray = exclude
      ? array.filter((obj) => obj["Russian"] !== exclude)
      : array;

    const shuffledArray = filteredArray.sort(() => Math.random() - 0.5);

    return shuffledArray.slice(0, chunkSize);
  } else {
    const chunk = Number(part);
    const startIndex = chunk * chunkSize;
    const endIndex = startIndex + chunkSize;
    return array.slice(startIndex, endIndex).sort(() => Math.random() - 0.5);
  }
};

export const insertAtRandomPosition = (array: any[], item: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  array.splice(randomIndex, 0, item);
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
