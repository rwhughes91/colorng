export interface Color {
  name: string;
  color: string;
}

export type Colors = Color[];

export interface Gradient {
  name: string;
  likes: number;
  colors: Colors;
}

export type Gradients = Gradient[];
