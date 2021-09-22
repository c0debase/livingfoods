import { createGlobalStyle } from 'styled-components';
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <Navbar />
      <h2>hello sliceline</h2>
    </>
  );
}

export default App;
