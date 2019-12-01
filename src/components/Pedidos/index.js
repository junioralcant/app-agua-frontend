import React from "react";
import { string } from "postcss-selector-parser";

import {
  Container,
  ContainerPedidos,
  PedidosList,
  Pesquisa,
  Footer,
  Dados
} from "./styles";

export default function Pedidos() {
  return (
    <Container>
      <Pesquisa>
        <input type="text" name="nome" placeholder="Pesquisar por nome" />
        <input type="date" name="dataInicio" placeholder="Data início" />
        <input type="date" name="dataFim" placeholder="Data fim" />
      </Pesquisa>
      <ContainerPedidos>
        <PedidosList>
          <header>
            <strong>Nome do cliente</strong>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
        <PedidosList>
          <header>
            <string>Nome do cliente</string>
            <small>03 de novenbro às 09 horas</small>
          </header>

          <ul>
            <li>
              Quantidade <small>4 Agua(s)</small>
            </li>
            <li>
              Valor <small>28,00 R$</small>
            </li>
            <li>
              Endereço
              <ul>
                <li>
                  Rua <small>Rua da graça</small>
                </li>
                <li>
                  Bairro <small>Toca da Raposa</small>
                </li>
                <li>
                  Número <small>394</small>
                </li>
              </ul>
            </li>
          </ul>
        </PedidosList>
      </ContainerPedidos>
      <Footer>
        <button>Anterior</button>
        <Dados>
          <strong>
            Quantidade de Pedidos: <small>100</small>
          </strong>
          <strong>
            Número de páginas: <small>49</small>
          </strong>
          <strong>
            Página atual: <small>9</small>
          </strong>
        </Dados>
        <button>Próximo</button>
      </Footer>
    </Container>
  );
}
