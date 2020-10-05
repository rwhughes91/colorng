export function hsl(rgbArr: string[]) {
  const r1 = Number(rgbArr[0]) / 255;
  const g1 = Number(rgbArr[1]) / 255;
  const b1 = Number(rgbArr[2]) / 255;
  const maxColor = Math.max(r1, g1, b1);
  const minColor = Math.min(r1, g1, b1);
  let L = (maxColor + minColor) / 2;
  let S = 0;
  let H = 0;
  if (maxColor !== minColor) {
    if (L < 0.5) {
      S = (maxColor - minColor) / (maxColor + minColor);
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor);
    }
    if (r1 === maxColor) {
      H = (g1 - b1) / (maxColor - minColor);
    } else if (g1 === maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor);
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor);
    }
  }
  L = L * 100;
  S = S * 100;
  H = H * 60;
  if (H < 0) {
    H += 360;
  }
  return { h: H, s: S, l: L };
}

export function colorName(hsl: { h: number; s: number; l: number }) {
  const l = Math.floor(hsl.l);
  const s = Math.floor(hsl.s);
  const h = Math.floor(hsl.h);
  if (s <= 10 && l >= 90) {
    return 'white';
  } else if ((s <= 10 && l <= 70) || s === 0) {
    return 'gray';
  } else if (l <= 15) {
    return 'black';
  } else if ((h >= 0 && h <= 15) || h >= 346) {
    return 'red';
  } else if (h >= 16 && h <= 35) {
    if (s < 90) {
      return 'brown';
    } else {
      return 'orange';
    }
  } else if (h >= 36 && h <= 54) {
    if (s < 90) {
      return 'brown';
    } else {
      return 'yellow';
    }
  } else if (h >= 55 && h <= 165) {
    return 'green';
  } else if (h >= 166 && h <= 260) {
    return 'blue';
  } else if (h >= 261 && h <= 290) {
    return 'purple';
  } else if (h >= 291 && h <= 345) {
    return 'pink';
  }
}

export function inten(rgbInput: number[]) {
  let hex = '';
  let txt: 'light' | 'dark' | 'semi-dark';
  hex += Number(rgbInput[2]).toString(16);
  hex += Number(rgbInput[0]).toString(16);
  hex += Number(rgbInput[1]).toString(16);
  const rgb = parseInt(hex, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const inten = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (inten >= 80 && inten <= 100) {
    txt = 'semi-dark';
  } else if (inten < 40) {
    txt = 'dark';
  } else {
    txt = 'light';
  }
  return txt;
}

export function convertToArray(color: string) {
  return color.replace(/[^0-9,]/g, '').split(',');
}
