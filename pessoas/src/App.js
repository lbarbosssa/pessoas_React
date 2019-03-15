import React, { Component } from "react";
import Loading from "./componentes/loading";
import axios from "axios";
import List from "./componentes/list";

class App extends Component {
  state = {
    carregando: true,
    pessoas: []
  };

  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://randomuser.me/api?nat=br&results=13")
        .then(data => {
          console.log(data.data.results);
          this.setState({ pessoas: data.data.results, carregando: false });
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  }

  exibirNaTela() {
    if (!this.state.pessoas) {
      return <p>Algo deu errado :/</p>;
    }
    return <List pessoas={this.state.pessoas} />;
  }

  render() {
    return (
      <div className="flex">
        {this.state.carregando ? <Loading /> : this.exibirNaTela()}
      </div>
    );
  }
}

export default App;
