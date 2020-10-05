export const capitalize = (x: string) => {
  const words = x.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
  return words.join(' ');
};

export const stripObject = (obj: { [key: string]: any }) => {
  const newObj: any = {};
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

export const itemsInArray = (obj: { [key: string]: any[] }) => {
  for (const key in obj) {
    if (obj[key].length > 0) {
      return true;
    }
  }
  return false;
};
