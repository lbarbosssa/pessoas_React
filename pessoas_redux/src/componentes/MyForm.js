import React, { Component } from "react";

import axios from "axios";

import url from "../api_url";

import { connect } from "react-redux";
import { setList, clear } from "../actions";

import Loading from "./Loading";
import Alert from "./Alert";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }
  getValue(e) {
    e.preventDefault();
    this.props.myComponentAction();
    axios
      .get(`${url}/api?nat=br&results=${this.qnt.value}`)
      .then(data => {
        //this.setState({loading: false})
        setTimeout(() => {
          this.props.myComponentAction(data.data.results);
        }, 1000);
      })
      .catch(error => {
        setTimeout(() => {
          this.props.clearList({msg: 'Algo deu Errado :/', type: 'alert-danger'});
        }, 1000);
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.getValue}>
        {this.props.loading ? (
          <Loading />
        ) : (
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
        )}
            {this.props.alert? <Alert data={this.props.alert}/> : null}
      </form>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.msg)
  return {
    pessoas: state.pessoas,
    loading: state.loading,
    alert: state.alert,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    myComponentAction: data => dispatch(setList(data)),
    clearList: data => dispatch(clear(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm);
