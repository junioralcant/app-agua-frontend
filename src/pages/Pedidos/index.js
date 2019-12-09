import React from "react";
import { BrowserRouter } from "react-router-dom";
import CadPedidos from "../../components/CadProduto";
import Sidebar from "../../components/Sidebar";

import { Container } from "./styles";

export default function Pedidos() {
  return (
    <Container>
      <Sidebar />
      <CadPedidos />
    </Container>
  );
}
