import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Sidebar />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
