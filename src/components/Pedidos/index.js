import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale/pt";

import api from "../../services/api";

import {
  Container,
  ContainerPedidos,
  PedidosList,
  Pesquisa,
  Footer,
  Dados
} from "./styles";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [pedidosInfo, setPedidosInfo] = useState([]);
  const [numberPage, setNumberPage] = useState(1);

  useEffect(() => {
    async function loadPedidos(page = numberPage) {
      const response = await api.get(`/pedidos?page=${page}`);
      const { docs, ...pedidoResto } = response.data;

      setPedidos(docs);
      setPedidosInfo(pedidoResto);
    }

    loadPedidos();
  }, [numberPage]);

  async function filterNome(e) {
    if (e.target.value !== "") {
      const response = await api.get(`/pedidos?nome=${e.target.value}`);
      setPedidos(response.data.docs);
    } else {
      const response = await api.get("/pedidos");
      setPedidos(response.data.docs);
    }
  }

  function pagePrevious() {
    if (numberPage === 1) return;
    const numberOfPages = numberPage - 1;
    setNumberPage(numberOfPages);
  }

  function pageNext() {
    if (numberPage === pedidosInfo.pages) return;
    const numberOfPages = numberPage + 1;

    setNumberPage(numberOfPages);
  }
  return (
    <Container>
      <Pesquisa>
        <input
          type="text"
          name="filterNome"
          placeholder="Pesquisar por nome"
          onChange={filterNome}
        />
        <input type="date" name="dataInicio" placeholder="Data início" />
        <input type="date" name="dataFim" placeholder="Data fim" />
      </Pesquisa>
      <ContainerPedidos>
        {pedidos.map(pedido => {
          const dataPedido = format(pedido.createdAt, "DD-MM-YYYY H:mm", {
            locale: pt
          });

          return (
            <PedidosList key={pedido._id}>
              <header>
                <strong>{pedido.cliente.nome}</strong>
                <small>{dataPedido}</small>
              </header>
              <ul>
                <li>
                  Quantidade
                  <small>
                    {pedido.quantidade} {pedido.produto.nome}
                  </small>
                </li>
                <li>
                  Valor <small>{pedido.valorTotal} R$</small>
                </li>
                <li>
                  Endereço
                  {pedido.enderecoEntrega.map(end => {
                    return (
                      <ul key={end._id}>
                        <li>
                          Rua <small>{end.rua}</small>
                        </li>
                        <li>
                          Bairro <small>{end.bairro}</small>
                        </li>
                        <li>
                          Número <small>{end.numeroCasa}</small>
                        </li>
                      </ul>
                    );
                  })}
                </li>
              </ul>
            </PedidosList>
          );
        })}
      </ContainerPedidos>
      <Footer>
        <button onClick={pagePrevious}>Anterior</button>
        <Dados>
          <strong>
            Quantidade de Pedidos: <small>{pedidosInfo.total}</small>
          </strong>
          <strong>
            Número de páginas: <small>{pedidosInfo.pages}</small>
          </strong>
          <strong>
            Página atual: <small>{pedidosInfo.page}</small>
          </strong>
        </Dados>
        <button onClick={pageNext}>Próximo</button>
      </Footer>
    </Container>
  );
}
