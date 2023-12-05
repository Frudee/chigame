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
    console.log(startIndex, endIndex);
    return array.slice(startIndex, endIndex).sort(() => Math.random() - 0.5);
  }
};

export const insertAtRandomPosition = (array: any[], item: any) => {
  const randomIndex = Math.floor(Math.random() * (array.length + 1));
  array.splice(randomIndex, 0, item);
};
