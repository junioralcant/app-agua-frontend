import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { pt } from "date-fns/locale/pt";
import { IoMdBicycle } from "react-icons/io";
import io from "socket.io-client";

import api from "../../services/api";

import {
  Container,
  ContainerPedidos,
  PedidosList,
  Pesquisa,
  Footer,
  Dados
} from "./styles";

export default function PedidosParaEntrega({ match }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function loadPedidos() {
      const response = await api.get(`/pedidosnaoentregues`);

      setPedidos(response.data);
    }

    loadPedidos();
  }, []);

  useEffect(() => {
    const socket = io("https://api-appagua.herokuapp.com/");

    socket.on("createPedido", message => {
      async function load() {
        const response = await api.get(`/pedidosnaoentregues`);

        setPedidos(response.data);
      }

      load();
    });
  }, []);

  async function update(id) {
    await api.put(`/pedidosnaoentregues/${id}`, { entregue: true });
    const response = await api.get("/pedidosnaoentregues");
    setPedidos(response.data);
  }

  async function filterNome(e) {
    if (e.target.value !== "") {
      const response = await api.get(
        `/pedidosnaoentregues?nome=${e.target.value}`
      );
      setPedidos(response.data);
    } else {
      const response = await api.get("/pedidosnaoentregues");
      setPedidos(response.data);
    }
  }

  console.log(pedidos);

  return (
    <Container>
      <Pesquisa>
        <input
          type="text"
          name="filterNome"
          placeholder="Pesquisar por nome"
          onChange={filterNome}
        />
      </Pesquisa>
      <ContainerPedidos>
        {pedidos.map(pedido => {
          const dataPedido = format(pedido.createdAt, "DD-MM-YYYY H:mm", {
            locale: pt
          });

          return (
            <PedidosList key={pedido._id}>
              <header>
                <button
                  onClick={e => {
                    if (
                      window.confirm(
                        `Deseja realmente entregar esse pedido do(a) cliente ${pedido.cliente.nome}?`
                      )
                    )
                      update(pedido._id);
                  }}
                >
                  <IoMdBicycle size={25} />
                </button>
                <strong>{pedido.cliente.nome}</strong>
                <small>{dataPedido}</small>
              </header>
              <ul>
                <li>
                  Quantidade:{" "}
                  <small>
                    {pedido.quantidade} {pedido.produto.nome}
                  </small>
                </li>
                <li>
                  Valor: <small>{pedido.valorTotal} R$</small>
                </li>
                <li>
                  Endereço
                  {pedido.enderecoEntrega.map(end => {
                    return (
                      <ul key={end._id}>
                        <li>
                          Rua: <small>{end.rua}</small>
                        </li>
                        <li>
                          Bairro: <small>{end.bairro}</small>
                        </li>
                        <li>
                          Número: <small>{end.numeroCasa}</small>
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
      <Footer></Footer>
    </Container>
  );
}
