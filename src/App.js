import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/components";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
