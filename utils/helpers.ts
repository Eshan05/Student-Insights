export const abbreviateTitle = (title: string) => {
  const words = title.split(" ");
  if (words.length >= 2) {
    return words.map((word: string) => word[0]).join("");
  }

  return title;
};