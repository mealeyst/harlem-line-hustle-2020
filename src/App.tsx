import Navigation from "./Navigation";
import GlobalFonts from './theme/fonts'
import GlitchLink from './global/GlitchLink'
import { DefaultColors } from "./theme/colors";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <DefaultColors />
      <header>
        <Navigation>
          <GlitchLink>About</GlitchLink>
          <GlitchLink>Blog</GlitchLink>
          <GlitchLink>Home</GlitchLink>
          <GlitchLink>Projects</GlitchLink>
          <GlitchLink>Contact</GlitchLink>
        </Navigation>
      </header>
    </div>
  );
}

export default App;
