import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/pageDeafult/pageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm.js';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos.js';
import categoriasRepository from '../../../repositories/categorias.js';
import './css.css';



function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo );
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  // console.log(categoryTitles);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault()
        // alert('oi');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastro feito com sucesso!');
            history.push('/');
          });

      }}>

        <FormField
          label="Título do Vídeo:"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL:"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria:"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit" className="batata">
          Cadastrar
        </Button>

        <Button as={Link} to="/cadastro/categoria" className="batata">
          Cadastrar Nova Categoria
        </Button>

      </form>

      {/* <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link> */}

    </PageDefault>
  );
}

export default CadastroVideo;