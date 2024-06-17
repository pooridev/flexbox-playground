export const getRandomArrayElement = <TList extends Array<unknown>>(list: TList) => {
  return list[Math.floor(Math.random() * list.length)];
};
