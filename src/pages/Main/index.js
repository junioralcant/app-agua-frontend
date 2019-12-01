import React from "react";

import { Container } from "./styles";
import Pedidos from "../../components/Pedidos";
import Sidebar from "../../components/Sidebar";

export default function Main() {
  return (
    <Container>
      <Pedidos />
    </Container>
  );
}
