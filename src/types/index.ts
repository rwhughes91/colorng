export interface Color {
  name: string;
  color: string;
}

export type Colors = Color[];

export interface Gradient {
  name: string;
  likes: number;
  colors: Colors;
  description: string;
}

export type Gradients = Gradient[];

export interface Navigation<T = Gradient> {
  name: string;
  params?: T;
}
