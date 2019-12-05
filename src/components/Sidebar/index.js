import React from "react";
import { logout } from "../../services/auth";
import { Container, Sair, Nav } from "./styles";

export default function Sidebar() {
  function sair() {
    window.location.href = "/signin";
    logout();
  }
  return (
    <Container>
      <div>
        <Nav>
          <li>
            <strong>Dashboard</strong>
          </li>
          <br></br>
          <li>
            <a href="/">Pedidos</a>
          </li>
          <li>
            <a href="/financeiro">Financeiro</a>
          </li>
        </Nav>
      </div>
      <Sair onClick={sair}>Sair</Sair>
    </Container>
  );
}
