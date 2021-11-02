import Navigation from "./Navigation";
import GlobalFonts from './theme/fonts'
import GlitchLink from './global/GlitchLink'
import { DefaultColors } from "./theme/colors";
import Button, { ButtonProps } from "./global/Button";
import { FunctionComponent } from "react";
import Canvas from "./Canvas";
import Home from "./Home";



function App() {
  return (
    <>
      <GlobalFonts />
      <DefaultColors />
      <Navigation>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
        <a href="#projects">PROJECTS</a>
      </Navigation>
      <Home />
    </>
  );
}

export default App;
