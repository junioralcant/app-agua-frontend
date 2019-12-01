import React from "react";

import { Container, Sair, Nav } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav>
          <li>
            <strong>Dashboard</strong>
          </li>
          <br></br>
          <li>
            <a href="#">Pedidos</a>
          </li>
          <li>
            <a>Financeiro</a>
          </li>
        </Nav>
      </div>
      <Sair>Sair</Sair>
    </Container>
  );
}
