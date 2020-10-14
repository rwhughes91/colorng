export interface Color {
  id?: string;
  name: string;
  hex: string;
  rgb?: { r: string; g: string; b: string };
  hsl?: { h: string; s: string; l: string };
  hsv?: { h: string; s: string; v: string };
  cmyk?: { c: string; y: string; m: string; k: string };
  xyz?: { x: string; y: string; z: string };
  shade?: string;
  inten?: 'dark' | 'light' | 'semi-dark';
}

export type RGB = [number, number, number];

export type Colors = Color[];

export interface Gradient {
  id?: string;
  name: string;
  likes: number;
  colorSearch: string[];
  description?: string;
  colors: Colors;
  createdBy?: string;
}

export type Gradients = Gradient[];

export interface Navigation<T = Gradient> {
  name: string;
  params?: T;
}
