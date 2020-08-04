import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDeafult/pageDefault.js';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button/index.js';
import useForm from '../../../hooks/useForm.js';
import '../Video/css.css';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // console.log("aaa");
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://edsflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {

    // }, 4 * 1000)
  }, [])


  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        {/* {values.nome} */}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/*Carregando*/}
      Loading...
        </div>
      )}

      <p className="p1">Categorias Existentes:</p>

      <ul>
        {categorias.map((categoria) => {
          return (
            <li key={`${categoria.titulo}`}  className="p2">
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Button as={Link} to="/" className="batata">
        Home
        </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
