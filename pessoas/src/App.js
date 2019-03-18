import React, { Component } from "react";
import Loading from "./componentes/loading";
import axios from "axios";
import List from "./componentes/list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carregando: true,
      error: false,
      full: true,
      pessoas: [],
    };

    this.getValue = this.getValue.bind(this);
    this.clearList = this.clearList.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ carregando: false });
    }, 500);
  }

  getValue(e) {
    e.preventDefault();
    console.log(this.qnt.value);
    this.getList(this.qnt.value);
  }

  getList(n) {
    this.setState({ full: true, carregando: true });
    axios
      .get(`https://randomuser.me/api?nat=br&results=${n}`)
      .then(data => {
        console.log(data.data.results);
        this.setState({
          pessoas: data.data.results,
          carregando: false,
          full: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ carregando: false, error: true, full: true });
      });
  }

  clearList(){
    this.setState({pessoas: [], full: true})
  }

  exibirNaTela() {

    if (this.state.error) {
      return <p>Algo deu errado :/</p>;
    }
    if (this.state.pessoas.length == 0) {

      return (
        <form onSubmit={this.getValue}>
          <div className="form-row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Quantos resultados?"
                id="qnt"
                ref={ref => (this.qnt = ref)}
                min={1}
                max={100}
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Gerar
              </button>
            </div>
          </div>
        </form>
      );
    }
    return [
      <button type="button" className="btn btn-outline-danger" onClick={this.clearList} key={1}>
        <i className="far fa-trash-alt"></i>
      </button>,
      <List pessoas={this.state.pessoas} key={2}/>
    ];
  }

  render() {
    const full = { height: "100vh" };

    return (
      <div className="flex" style={this.state.full ? full : null}>
        <div className="content">
          {this.state.carregando ? <Loading /> : this.exibirNaTela()}
        </div>
      </div>
    );
  }
}

export default App;
