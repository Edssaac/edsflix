import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './components/menu/menu.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import CadastroVideo from './pages/cadastro/Video/Cadastro.js';
import CadastroCategoria from './pages/cadastro/Categoria/index.js';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={ () => (<div>Página 404</div>) }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);