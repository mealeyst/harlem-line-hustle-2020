import { createGlobalStyle } from "styled-components";
export interface Color {
  [key: string]: string
}

const black:Color = {
  1: 'hsl(233, 12%, 56%)',
  2: 'hsl(234, 12%, 48%)',
  3: 'hsl(233, 12%, 40%)',
  4: 'hsl(231, 12%, 32%)',
  5: 'hsl(230, 12%, 20%)',
  6: 'hsl(231, 11%, 12%)',
  7: 'hsl(228, 12%, 8%)',
};

black.default = black[7];

const blue:Color = {
  1: 'hsl(224, 98%, 40%)',
  2: 'hsl(224, 98%, 32%)',
  3: 'hsl(224, 98%, 24%)',
  4: 'hsl(224, 98%, 16%)',
  5: 'hsl(224, 97%, 12%)',
  6: 'hsl(225, 95%, 8%)',
  7: 'hsl(227, 90%, 4%)'
};

blue.default = blue[4];

const green:Color = {
  1: 'hsl(120, 90%, 96%)',
  2: 'hsl(122, 90%, 92%)',
  3: 'hsl(121, 90%, 88%)',
  4: 'hsl(121, 90%, 81%)',
  5: 'hsl(120, 90%, 12%)',
  6: 'hsl(120, 90%, 8%)',
  7: 'hsl(120, 90%, 2%)',
};

green.default = green[4];

const orange:Color = {
  1: 'hsl(24, 100%, 80%)',
  2: 'hsl(24, 100%, 70%)',
  3: 'hsl(24, 100%, 60%)',
  4: 'hsl(24, 100%, 50%)',
  5: 'hsl(24, 100%, 40%)',
  6: 'hsl(24, 100%, 30%)',
  7: 'hsl(24, 100%, 20%)',
};

orange.default = orange[4];

const white:Color = {
  1: 'hsl(206, 70%, 96%)',
  2: 'hsl(205, 73%, 94%)',
  3: 'hsl(205, 75%, 92%)',
  4: 'hsl(205, 77%, 90%)',
  5: 'hsl(205, 80%, 88%)',
  6: 'hsl(205, 90%, 86%)',
  7: 'hsl(205, 100%, 84%)',
};

white.default = white[1];

export default {
  black,
  blue,
  green,
  orange,
  white
}

export const DefaultColors = createGlobalStyle`
html {
  background-color: ${black.default};
  color: ${white.default};
}
body{
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzEyMTMxNyI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMmQyZjM5Ij48L3JlY3Q+Cjwvc3ZnPg==");
  min-height: 100vh;
}
`