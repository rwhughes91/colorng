import { Gradient as GradientType, RGB } from '@typeDefs/index';

import Color from './Color';

export default class Gradient implements GradientType {
  name: string;
  likes: number;
  description?: string;
  colors: Color[];

  constructor(name: string, colors: RGB[], likes?: number, description?: string) {
    const colorsObj = colors.map((rgb) => new Color(rgb));
    this.name = name;
    this.likes = likes || 0;
    this.description = description;
    this.colors = colorsObj;
  }
}
