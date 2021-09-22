import { createGlobalStyle } from 'styled-components';
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <h2>sliceline</h2>
      <div>
        hello sliceline
      </div>
    </>
  );
}

export default App;
