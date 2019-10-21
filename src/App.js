import React, {Component} from 'react';
import './css/bootstrap.min.css';
//estilização
import './css/style.css'

//rotas
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;