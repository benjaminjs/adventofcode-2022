import fs from "fs";

const topScores = async (topPlaces) => {
  const fileData = await fs.promises.readFile("./data.txt", "utf-8");

  const elfCalories = fileData
    .split("\n\n")
    .map((elf) =>
      elf
        .split("\n")
        .map(Number)
        .reduce((acc, elf) => acc + elf, 0)
    )
    .sort((a, b) => b - a);

  return elfCalories.slice(0, topPlaces).reduce((acc, elf) => acc + elf, 0);
};

(async () => {
  console.log(await topScores(1));
  console.log(await topScores(3));
})();
