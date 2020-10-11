import { Gradient as GradientType, RGB } from '@typeDefs/index';

import Color from './Color';

export default class Gradient implements GradientType {
  name: string;
  likes: number;
  description?: string;
  colors: Color[];
  colorSearch: string[];

  constructor(name: string, colors: RGB[], likes?: number, description?: string) {
    const colorsObj = colors.map((rgb) => new Color(rgb)) as Required<Color>[];
    const colorHexes = colorsObj.map((color) => color.hex.toLowerCase());
    const colorShadesWithInten = Array.from(
      new Set(colorsObj.map((color) => `${color.inten.toLowerCase()} ${color.shade.toLowerCase()}`))
    );
    const colorShades = Array.from(new Set(colorsObj.map((color) => color.shade.toLowerCase())));
    const colorNames = colorsObj.map((color) => color.name.toLowerCase());
    this.name = name;
    this.likes = likes || 0;
    this.description = description;
    this.colors = colorsObj;
    this.colorSearch = colorHexes.concat(colorShadesWithInten, colorShades, colorNames);
  }
}
