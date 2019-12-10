import React from "react";
import { BrowserRouter } from "react-router-dom";

//Renomeei o componente pra ficar com o mesmo nome da pasta dele, se quiser mudar de novo tem problema não, só mudar
import CadProduto from "../../components/CadProduto";
import Sidebar from "../../components/Sidebar";

import { Container } from "./styles";

export default function Pedidos({ ...props }) {
  return (
    <Container>
      <Sidebar />
      <CadProduto { ...props } />
    </Container>
  );
}
