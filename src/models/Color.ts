import { Color as ColorType, RGB } from '@typeDefs/index';
import { colorName, inten } from '@utils/colorConversion';
import ntc from '@yatiac/name-that-color';
import convert from 'color-convert';

export default class Color implements ColorType {
  name: string;
  hex: string;
  rgb?: { r: string; g: string; b: string };
  hsl?: { h: string; s: string; l: string };
  hsv?: { h: string; s: string; v: string };
  cmyk?: { c: string; y: string; m: string; k: string };
  xyz?: { x: string; y: string; z: string };
  shade?: string;
  inten?: 'dark' | 'light' | 'semi-dark';

  constructor(rgb: RGB, name?: string) {
    this.name = name || ntc(convert.rgb.hex(rgb)).colorName.toLowerCase();
    this.hex = convert.rgb.hex(rgb);
    this.rgb = Color.objectify(rgb, 'rgb');
    this.hsl = Color.objectify(convert.rgb.hsl(rgb), 'hsl');
    this.hsv = Color.objectify(convert.rgb.hsv(rgb), 'hsv');
    this.cmyk = Color.objectify(convert.rgb.cmyk(rgb), 'cmyk');
    this.xyz = Color.objectify(convert.rgb.xyz(rgb), 'xyz');
    this.shade = colorName(Color.objectify(convert.rgb.hsl(rgb), 'hsl'));
    this.inten = inten(rgb);
  }

  static objectify(data: number[], keys: string) {
    if (data.length !== keys.length) {
      throw new Error('Keys array length must equal data array length');
    }
    const obj: any = {};
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = data[i];
    }
    obj.value = `${keys}(${data.join(', ')})`;
    return obj;
  }
}
