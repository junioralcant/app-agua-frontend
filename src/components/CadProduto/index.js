import React, { useState, useEffect } from "react";
import { Input, Form } from "unform";
import { IoMdTrash } from "react-icons/io";
import { Container, Register, List, PedidosList, Content } from "./styles";
import Select from "react-select";
import api from "../../services/api";
import Sidebar from "../Sidebar/index";

export default function CadProduto({ history, match }) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaId, setCategoriaId] = useState();

  async function handlerSubmit(data) {
    if (!match.params.id) {
      if (!data.nome || !data.quantidade || !data.preco) {
        setError("Preencha todos os campos!");
      } else {
        try {
          data.categoria = categoriaId;
          await api.postOrPut("/produtos", match.params.id, data);

          const response = await api.get("/produtos");
          const { docs, ...restoProduto } = response.data;

          setProdutos(docs);
        } catch (error) {
          setError(error.response.data.error);
        }
      }
    } //else {
    //   try {
    //     //data.categoria = categoriaId;
    //     await api.postOrPut("/produtos", match.params.id, data);
    //     history.push("/produto"); // redireciona o user
    //   } catch (error) {
    //     setError(error.response.data.error);
    //   }
    // }
  }

  useEffect(() => {
    async function loadProdutos() {
      const response = await api.get("/produtos");
      const { docs, ...restoPedidos } = response.data;

      setProdutos(docs);
    }

    loadProdutos();
  }, []);

  useEffect(() => {
    async function loadCategoria() {
      const response = await api.get("/categorias");
      const { docs, ...restoPedidos } = response.data;

      setCategorias(docs);
    }

    loadCategoria();
  }, []);

  function handleSelectChange(cat) {
    setCategoriaId(cat);
  }

  async function destroy(id) {
    await api.delete(`produtos/${id}`);

    const response = await api.get("/produtos");
    const { docs, ...produtoResto } = response.data;
    setProdutos(docs);
  }
  // estilização do Select
  const colourStyle = {
    control: styles => ({
      ...styles,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "white"
    }),
    option: styles => ({
      ...styles,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff"
    }),
    input: styles => ({ ...styles, color: "#fff" }),
    singleValue: styles => ({ ...styles, color: "#fff" })
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <header>
          <h1>Cadrastro de produtos</h1>
        </header>

        <Register>
          <Form className="form" initialData={data} onSubmit={handlerSubmit}>
            {error && <p>{error}</p>}
            <Input name="nome" label="Nome" />
            <Input name="preco" label="Preço" />
            <Input name="quantidade" label="Quantidade" />
            {/* <Input name="categoria" label="Cad" /> */}
            <span>Categoria</span>
            <Select
              label="Categoria"
              options={categorias}
              defaultInputValue={(categorias.value = categorias.nome)}
              styles={colourStyle}
              name="categoria"
              getOptionLabel={categoria => categoria.nome}
              getOptionValue={categoria => categoria._id}
              onChange={value => handleSelectChange(value._id)}
            />

            <button type="submit">Salvar</button>
          </Form>
        </Register>
        <List>
          {produtos.map(produto => {
            return (
              <PedidosList key={produto._id}>
                <header>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Deseja realmente deletar o produto ${produto.nome}?`
                        )
                      )
                        destroy(produto._id);
                    }}
                  >
                    <IoMdTrash />
                  </button>
                  <strong> {produto.nome}</strong>
                </header>
                <ul>
                  <li>
                    Quantidade estoque: <small> {produto.quantidade}</small>
                  </li>
                  <li>
                    Categoria: <small> {produto.categoria.nome}</small>
                  </li>
                  <li>
                    Valor unidade: <small> {produto.preco}</small>
                  </li>
                </ul>
              </PedidosList>
            );
          })}
        </List>
      </Content>
    </Container>
  );
}
