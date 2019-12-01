import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { Container } from "./styles/components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Routes />
    </Container>
  );
}

export default App;
